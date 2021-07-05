module.exports = {
    registerDog: require('./register'),
    authenticateUser: require('./authentication'),
    retrieveAllDogs: require('./retrieve-all-dogs'),
    retrieveDog: require('./retrieve-dog'),
    saveDogPicture: require('./save-dog-picture'),
    retrieveDogPicture: require('./retrieve-dog-picture'),
    toggleAddDogFriend: require('./toggle-add-dog-friend'),
    createComment: require('./create-comment'),
}