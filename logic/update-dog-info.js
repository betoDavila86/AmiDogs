const { User, Dog } = require('../models');
const validations = require('../routes/api/helpers/validations');
const { NotFoundError } = require('../utils/custom-errors');

module.exports = (userId, dogId, update) => {
    validations.string(userId, 'userId');
    validations.string(dogId, 'dogId');
    validations.type(update, 'update', Object);

    return Promise.all([User.findById(userId), Dog.findById(dogId)])
        .then(([user, dog]) => {
            if (!user) throw new NotFoundError(`Usuario con id ${userId} no existe`);
            if (!dog) throw new NotFoundError(`Perro con id ${dogId} no existe`);

            return Dog.findByIdAndUpdate(dogId, { $set: { update } }, { new: true }).lean()
                .then(console.log)
        })
        .then(() => { })

}