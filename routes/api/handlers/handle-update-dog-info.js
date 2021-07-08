const { updateDogInfo } = require('../../../logic');

module.exports = (req, res, handleError) => {
    const { body: { update }, userId, params: { dogId } } = req

    try {
        updateDogInfo(userId, dogId, update)
            .then(() => res.status(206).json({ message: 'Se ha actualizado correctamente' }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}