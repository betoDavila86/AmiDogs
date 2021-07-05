require('dotenv').config()
const validations = require('../routes/api/helpers/validations')
const { NotFoundError } = require('../utils/custom-errors')
const { Dog } = require('../models');
const fs = require('fs')
const path = require('path')

module.exports = function (dogId) {
    validations.string(dogId, 'dogId')

    return (async () => {
        const dog = await Dog.findById(dogId)
        if (!dog) throw new NotFoundError(`Perro con id ${dogId} no existe`)

        let goTo = path.join(__dirname, `../data/dogs/${dogId}/dog01.jpg`)

        if (fs.existsSync(goTo)) {
            return fs.createReadStream(goTo)
        } else {
            const defaultImage = path.join(__dirname, `../data/defaultimage/dog-default.jpg`)
            return fs.createReadStream(defaultImage)
        }
    })()
}