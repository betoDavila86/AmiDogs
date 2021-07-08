module.exports = {
    registerUser: require('./register-user'),
    authenticateUser: require('./authentication'),
    retrieveAllDogs: require('./retrieve-all-dogs'),
    retrieveDog: require('./retrieve-dog'),
    saveDogPicture: require('./save-dog-picture'),
    retrieveDogPicture: require('./retrieve-dog-picture'),
    toggleAddDogFriend: require('./toggle-add-dog-friend'),
    createComment: require('./create-comment'),
    retrieveMyPets: require('./retrieve-my-pets'),
    registerPetBasicInfo: require('./register-pet-basic-info'),
    addPetToOwner: require('./add-pet-to-owner'),
    updateDogInfo: require('./update-dog-info'),
}