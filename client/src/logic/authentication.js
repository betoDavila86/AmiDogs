const { context } = require('.');
const validations = require('./helpers/validations');
const { NotAllowedError, NotFoundError } = require('../utils/custom-errors');

export default (function ({ email, password }) {
    validations.stringFrontend(email, 'email del usuario');
    validations.email(email);
    validations.stringFrontend(password, 'contraseña del usuario');

    const data = {
        email,
        password
    }

    return (async () => {
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json' }
        };

        const response = await fetch(`${this.API_URL}/users/auth`, options);

        const { status } = response;

        if (status === 200) {
            const token = await response.json();
            this.storage.token = token;
            return;
        }

        if (status >= 400 && status < 500) {
            const { message } = await response.json();

            if (status === 401) {
                throw new NotAllowedError(message);
            }

            if (status === 404) {
                throw new NotFoundError(message);
            }

            throw new Error(message);
        }

        throw new Error('server error');
    })();
}).bind(context);