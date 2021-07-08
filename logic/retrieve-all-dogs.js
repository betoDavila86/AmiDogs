const { Dog } = require('../models')

module.exports = () => {
    let dogsBasicInfo = [];

    return Dog.find({}).lean()
        .then(dogs => {
            if (!dogs.length) return [];

            dogs.forEach(dog => {
                dog.id = dog._id.toString()
                delete dog._id
                delete dog.__v

                const { nameDog, id, breed, age } = dog;
                dogsBasicInfo.push({ nameDog, id, breed, age });
            })
            return dogsBasicInfo;
        })
}