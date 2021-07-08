const { Dog, User } = require('../models')
const validations = require('../routes/api/helpers/validations');
const { NotFoundError } = require('../utils/custom-errors');

module.exports = (userId) => {
    validations.string(userId, 'Id del usuario');

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`Usuario con id ${userId} no existe`);

            if (!user.ownerOf.length) return [];

            let { ownerOf: petsId } = user;
            return Promise.all(petsId.map(petId =>
                Dog.findById(petId).lean()
                    .then(pet => {
                        if (!pet) throw new NotFoundError(`Perro con id ${petId} no existe`);

                        pet.id = pet._id.toString()
                        delete pet._id
                        delete pet.__v

                        return pet;
                    })
            ))
            .then(pets => pets)
        })
}