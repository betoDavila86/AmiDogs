const { registerUser, registerPetBasicInfo, addPetToOwner } = require('../../../logic');

module.exports = (req, res, handleError) => {
    try {
        const { body: { email, password, nameDog, breed, age, size, character, gender } } = req

        registerUser(email, password)
            .then(() => registerPetBasicInfo(email, nameDog, breed, age, character, size, gender)
                .then(() => addPetToOwner(email, nameDog)
                    .then(() => res.status(201).end())
                    .catch(handleError))
                .catch(handleError))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}