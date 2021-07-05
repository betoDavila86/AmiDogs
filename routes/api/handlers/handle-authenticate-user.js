const { authenticateUser } = require('../../../logic');

module.exports = (req, res, handleError) => {
    try {
        const { body: { email, password } } = req

        authenticateUser(email, password)
            .then(() => res.status(201).json({ msg: '¡Bienvenid@!' }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}