const _fetch = require('node-fetch');
const { NotFoundError, NotAllowedError } = require('../utils/custom-errors');

export default {
    post: function (url, body, token = undefined) {
        return (async () => {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body instanceof Object ? body : { body })
            };

            if (token) options.headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };

            const response = await _fetch(url, options);

            const { status } = response;

            if (status === 201) {
                await response.json();
                return;
            };

            if (status >= 400 && status < 500) {
                const { message } = await response.json();

                if (status === 401) throw new NotAllowedError(message);

                if (status === 404) throw new NotFoundError(message);

                throw new Error(message);
            }

            throw new Error('server error');
        })();
    },

    get: function (url, token = undefined) {
        return (async () => {
            const options = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            };

            if (token) options.headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };

            const response = await _fetch(url, options);

            const { status } = response;

            if (status === 200) {
                const results = await response.json();
                return results;
            }

            if (status >= 400 && status < 500) {
                const { message } = await response.json();

                if (status === 401) throw new NotAllowedError(message);

                if (status === 404) throw new NotFoundError(message);

                throw new Error(message);
            }

            throw new Error('server error');
        })();
    },

    patch: async function (url, body = undefined, token = undefined) {
        return (async () => {
            const options = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' }
            };

            if (token) options.headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };
            if (body) options.body = JSON.stringify(body instanceof Object ? body : { body });

            const response = await _fetch(url, options);

            const { status } = response;

            if (status === 206) {
                const results = await response.json();
                return results;
            }

            if (status >= 400 && status < 500) {
                const { message } = await response.json();

                if (status === 401) throw new NotAllowedError(message);

                if (status === 404) throw new NotFoundError(message);

                throw new Error(message);
            }

            throw new Error('server error');
        })();
    },

    delete: function (url, token = undefined) {
        return (async () => {
            const options = {
                method: 'DELETE', headers: { 'Content-Type': 'application/json' }
            }
            if (token) options.headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };

            const response = await _fetch(url, options);
            const { status } = response;

            if (status === 206) {
                const results = await response.json();
                return results;
            }

            if (status >= 400 && status < 500) {
                const { message } = await response.json();

                if (status === 401) throw new NotAllowedError(message);

                if (status === 404) throw new NotFoundError(message);

                throw new Error(message);
            }

            throw new Error('server error');
        })();
    }
}