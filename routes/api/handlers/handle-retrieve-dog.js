const { retrieveDog } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { params: { dogId } } = req
    try {
        retrieveDog(dogId)
            .then(dog => res.status(200).json({ dog }))
            .catch(handleError);
    } catch (error) {
        handleError(error);
    }
}