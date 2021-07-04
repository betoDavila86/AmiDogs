const validations = require('../routes/api/helpers/validations')
const { ConflictError } = require('../utils/custom-errors')
const { User, Dog } = require('../models')
const bcryptjs = require('bcryptjs')


module.exports = function (email, password, nameDog, breed, age, character, size, gender) {
    validations.email(email)
    validations.string(password, 'password')
    validations.string(email, 'email')
    validations.string(nameDog, 'nombre del perro')
    validations.string(breed, 'raza')
    validations.string(age, 'edad')
    validations.string(character, 'personalidad')
    validations.string(size, 'tamaño')
    validations.string(gender, 'género')

    return User
        .findOne({ email })
        .then(user => {
            if (user) throw new ConflictError(`El usuario con email ${email} ya está registrado`)

            return bcryptjs.hash(password, 10)
        })
        .then(hash => User.create({ email, password: hash }))
        .then(() => Dog.create({ nameDog, breed, age, character, size, gender }))
        .then(() => { })
}