const { retrieveMyPets } = require('../../../logic')

module.exports = (req, res, handleError) => {
    try {
        const { userId } = req;
        retrieveMyPets(userId)
            .then(myPets => res.status(200).send(myPets))
            .catch(handleError);
    } catch (error) {
        handleError(error);
    }
}