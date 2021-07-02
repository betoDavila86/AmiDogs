const { Router } = require('express')
const jwtParser = require('../../middlewares/jwt-parser');

const {

} = require('./handlers/index')

const router = new Router()

const withErrorHandling = require('./helpers/handle-error')

// register user
router.post('/api/users', withErrorHandling(handleRegisterUser))

// authenticate user
router.post('/api/users/auth', withErrorHandling(handleAuthenticateUser))

module.exports = router