const { Dog, User } = require('../models');
const { NotFoundError } = require('../utils/custom-errors');

module.exports = (email, nameDog) => {
    return User.findOne({ email }).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`El usuario con email ${email} no existe`)

            return Dog.findOne({ nameDog }).lean()
                .then(dog => {
                    if (!dog) throw new NotFoundError(`Mascota con nombre ${nameDog} no existe`);

                    return Promise.all([User.findOneAndUpdate({ email }, { $addToSet: { ownerOf: dog._id.toString() } }), Dog.findOneAndUpdate({ nameDog }, { $addToSet: { owner: user._id.toString() } })])
                        .then(() => { })
                })
        })
        .then(() => { })
}