const { Dog } = require('../models')

module.exports = () => {
    return Dog.find({}).lean()
        .then(dogs => {
            if (!dogs.length) return [];

            dogs.forEach(dog => {
                dog.id = dog._id.toString()
                delete dog._id
                delete dog.__v
            })

            return { nameDog, id, image, breed, age };
        })
}