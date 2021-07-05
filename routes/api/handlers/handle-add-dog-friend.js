const { toggleAddDogFriend } = require('../../../logic')

module.exports = (req, res, handleError) => {
    const { userId, params: { dogFriendId } } = req;
    try {
        toggleAddDogFriend(userId, dogFriendId)
            .then(() => res.status(200).json({ msg: '¡Has añadido un nuevo amigo!' }))
            .catch(handleError);
    } catch (error) {
        handleError(error);
    }
}