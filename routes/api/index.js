const { Router } = require('express')
const jwtParser = require('../../middlewares/jwt-parser');

const {
    handleAuthenticateUser,
    handleRegisterUserAndPet,
    handleRetrieveAllDogs,
    handleRetrieveDog,
    handleAddDogFriend,
    handlePublishComment,
    handleRetrieveMyPets,
    handleUpdateDogInfo,
} = require('./handlers');

const router = new Router()

const withErrorHandling = require('./helpers/handle-error')

// register dog
router.post('/api/users', withErrorHandling(handleRegisterUserAndPet));

// authenticate user
router.post('/api/users/auth', withErrorHandling(handleAuthenticateUser))

// retrieve dog
router.get('/api/dogs/:dogId', withErrorHandling(handleRetrieveDog));

// retrieve all dogs
router.get('/api/dogs', withErrorHandling(handleRetrieveAllDogs));

// add dog friend
router.patch('/api/dogs/:dogFriendId', jwtParser, withErrorHandling(handleAddDogFriend));

// publish comment
router.post('/api/dogs/:dogId/comment', jwtParser, withErrorHandling(handlePublishComment));

// retrieve my pets
router.get('/api/users/dogs', jwtParser, withErrorHandling(handleRetrieveMyPets));

// update dog info
router.patch('/api/users/dogs/:dogId', jwtParser, withErrorHandling(handleUpdateDogInfo));

module.exports = router