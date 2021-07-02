const jwt = require('jsonwebtoken')
const { env: { JWT_SECRET } } = process

module.exports = (req, res, next) => {
    try {
        const { headers: { authorization } } = req

        const token = authorization.replace('Bearer ', '')

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        req.userId = userId
        next()
    } catch (error) {
        res.status(401).json({ error: error.message })
    }
}