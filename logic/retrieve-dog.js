const { Dog } = require("../models");
const validations = require('../routes/api/helpers/validations');
const { NotFoundError } = require("../utils/custom-errors");

module.exports = (dogId) => {
    validations.string(dogId, 'Id del perro');

    return Dog.findById(dogId).populate('comments').lean()
    .then(dog => {
        if (!dog) throw new NotFoundError(`Perro con id ${dogId} no se ha encontrado`);

        dog.id = dog._id.toString();
        delete dog._id;
        delete dog.__v;

        dog.comments.length > 0 && dog.comments.forEach(comment => {
            comment.id = comment._id.toString();
            delete comment._id;
            delete comment.__v;
        })

        return dog;
    })
}