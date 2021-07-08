const validations = require('../routes/api/helpers/validations')
const { ConflictError, NotFoundError } = require('../utils/custom-errors')
const { Dog, User } = require('../models');


module.exports = (email, nameDog, breed, age, character, size, gender) => {
    validations.string(email, 'email del usuario')
    validations.email(email)
    validations.string(nameDog, 'nombre del perro')
    validations.string(breed, 'raza')
    validations.string(age, 'edad')
    validations.string(character, 'personalidad')
    validations.string(size, 'tamaño')
    validations.string(gender, 'género')

    return User.findOne({ email }).lean()
        .then(user => {
            if (!user) throw new NotFoundError(`El usuario con email ${email} no existe`);

            user.ownerOf.length > 0 && Promise.resolve(user.ownerOf.forEach(pet => {
                return Dog.findOne({ nameDog: pet.nameDog }).lean()
                    .then(petFound => {
                        if (petFound) throw new ConflictError(`Ya añadiste una mascota con el nombre ${nameDog}`);

                        return Dog.create({ nameDog, breed, age, character, size, gender })
                    })
            }))
            return Dog.create({ nameDog, breed, age, character, size, gender })
        })
        .then(() => { })
}