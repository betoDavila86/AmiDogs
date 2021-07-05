const { Router } = require('express')
const jwtParser = require('../../middlewares/jwt-parser');

const {
    handleAuthenticateUser,
    handleRegisterDog,
    handleRetrieveAllDogs,
    handleRetrieveDog,
    handleAddDogFriend,
    handlePublishComment,
} = require('./handlers');

const router = new Router()

const withErrorHandling = require('./helpers/handle-error')

// register dog
router.post('/api/users', withErrorHandling(handleRegisterDog))

// authenticate user
router.post('/api/users/auth', withErrorHandling(handleAuthenticateUser))

// retrieve all dogs
router.get('/api/dogs', withErrorHandling(handleRetrieveAllDogs));

// retrieve dog
router.get('/api/dogs/:dogId', withErrorHandling(handleRetrieveDog));

// add dog friend
router.patch('/api/dogs/:dogFriendId', jwtParser, withErrorHandling(handleAddDogFriend));

// publish comment
router.post('/api/dogs/:dogId/comment', jwtParser, withErrorHandling(handlePublishComment));

module.exports = router