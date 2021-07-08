const { retrieveAllDogs } = require('../../../logic')

module.exports = (req, res, handleError) => {
    try {
        retrieveAllDogs()
            .then(dogs => res.status(200).json(dogs))
            .catch(handleError);
    } catch (error) {
        handleError(error);
    }
}