const { createComment } = require('../../../logic');

module.exports = (req, res, handleError) => {
    try {
        const { userId, body: { description }, params: { dogId } } = req

        createComment(userId, dogId, description)
            .then(() => res.status(201).json({ msg: '¡Comentario publicado!' }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}