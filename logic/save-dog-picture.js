require('dotenv').config()
const validations = require('../routes/api/helpers/validations')
const { NotFoundError } = require('../utils/custom-errors')
const { User, Dog } = require('../models');
const fs = require('fs')
const path = require('path')

module.exports = function (userId, dogId, file, filename) {
    validations.string(userId, 'userId')
    validations.string(dogId, 'dogId')
    validations.string(filename, 'filename')

    return (async () => {
        const user = await User.findById(userId)
        if (!user) throw new NotFoundError(`Usuario con id ${userId} no existe`);

        const dog = await Dog.findById(dogId)
        if (!dog) throw new NotFoundError(`Perro con id ${toiletId} no existe`);

        const dir = `./data/dogs/${dogId}`
        if (!fs.existsSync(dir)) fs.mkdirSync(dir)

        let saveTo = path.join(__dirname, `../data/dogs/${dogId}/${filename}.jpg`)
        file.pipe(fs.createWriteStream(saveTo))
    })()
}