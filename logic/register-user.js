const validations = require('../routes/api/helpers/validations')
const { ConflictError } = require('../utils/custom-errors')
const { User } = require('../models')
const bcryptjs = require('bcryptjs')

module.exports = (email, password) => {
    validations.email(email)
    validations.string(password, 'password')
    validations.string(email, 'email');

    return User
        .findOne({ email })
        .then(user => {
            if (user) throw new ConflictError(`El usuario con email ${email} ya está registrado`)

            return bcryptjs.hash(password, 10)
        })
        .then(hash => User.create({ email, password: hash }))
        .then(() => { })
}