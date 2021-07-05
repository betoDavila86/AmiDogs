const validations = require('../routes/api/helpers/validations');
const { Dog, User, Comment } = require('../models');
const { NotFoundError, NotAllowedError } = require('../utils/custom-errors');

module.exports = (id, dogId, description) => {
    validations.string(id, 'id')
    validations.string(dogId, 'Perro ID');

    return Promise.all([User.findById(id), Dog.findById(dogId)])
        .then(([user, dog]) => {
            if (!user) throw new NotFoundError(`Usuario con id ${id} no existe`)
            if (!dog) throw new NotFoundError(`Perro con id ${dogId} no existe`)

            const comment = new Comment({ poster: id, created: new Date, commentedTo: dogId, description })

            dog.comments.push(comment)

            return Promise.all([dog.save(), comment.save()])
        })
        .then(() => { })
}