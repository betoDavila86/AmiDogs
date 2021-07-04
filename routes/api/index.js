const { Router } = require('express')
const jwtParser = require('../../middlewares/jwt-parser');

const {
    handleAuthenticateUser,
    handleRegisterDog
} = require('./handlers')

const router = new Router()

const withErrorHandling = require('./helpers/handle-error')

// register dog
router.post('/api/users', withErrorHandling(handleRegisterDog))

// authenticate user
router.post('/api/users/auth', withErrorHandling(handleAuthenticateUser))

module.exports = router