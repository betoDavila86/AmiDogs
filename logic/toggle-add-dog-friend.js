const validations = require('../routes/api/helpers/validations');
const { User, Dog } = require('../models');
const { NotAllowedError, NotFoundError } = require('poopinion-errors');

module.exports = (userId, dogFriendId) => {
    validations.string(userId, 'ID del dueño')
    validations.string(dogFriendId, 'ID del perro amigo')

    return User.findById(id).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`Usuario con id ${id} no existe`);

            if (!user.ownerOf.length) throw new NotAllowedError('No has añadido ninguna mascota')

            user.ownerOf.length > 0 && Promise.resolve(user.ownerOf.forEach(dogId => {
                return Dog.findById(dogId).lean()
                    .then(dog => {
                        if (!dog) throw new NotFoundError(`Perro con id ${dogId} no existe`);

                        if (!dog.friends.length) return Dog.findByIdAndUpdate(dogId.toString(), { $addToSet: { friends: dogFriendId.toString() } })
                            .then(() => { })

                        for (let i = 0; i < dog.friends.length; i++) {
                            let friend = dog.friends[i]._id.toString();
                            if (friend === dogFriendId) return Dog.findByIdAndUpdate(dogId.toString(), { $pull: { friends: dogFriendId.toString() } })
                                .then(() => { })
                        }

                        return Dog.findByIdAndUpdate(dogId.toString(), { $addToSet: { friends: dogFriendId.toString() } })
                            .then(() => { })
                    })
            }))

        })
        .then(() => { })
}