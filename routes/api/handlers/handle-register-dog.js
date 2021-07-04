const registerDog = require('../../../logic');
 
module.exports = (req, res, handleError) => {
    try {
        const { body: { email, password, nameDog, breed, age, size, character, gender } } = req

        registerDog(email, password, nameDog, breed, age, character, size, gender)
            .then(() => res.status(201).json({ msg: '¡Mascota registrada!' }))
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}