import { fetch, context } from '.';

export default (function () {
    return (async () => {
        const allDogs = await fetch.get(`${this.API_URL}/dogs`)
        return allDogs;
    })()
}).bind(context);