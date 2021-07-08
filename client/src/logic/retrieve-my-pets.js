import { fetch, context } from '.';

export default (function () {
    return (async () => {
        const { storage: { token }, API_URL } = this
        const myPets = await fetch.get(`${API_URL}/users/dogs`, token);
        return myPets;
    })()
}).bind(context)