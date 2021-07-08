const { authenticateUser } = require('../../../logic');
const jwt = require('jsonwebtoken');
const { env: { JWT_SECRET, JWT_EXP } } = process;

module.exports = (req, res, handleError) => {
    try {
        const { body: { email, password } } = req

        authenticateUser(email, password)
            .then(id => {
                const token = jwt.sign({ sub: id }, JWT_SECRET, { expiresIn: JWT_EXP })
                res.status(200).json(token)
            })
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}