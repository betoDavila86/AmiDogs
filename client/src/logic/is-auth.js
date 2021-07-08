const { context } = require('.')

export default (function () {
    const { token } = this.storage;

    return !!token;
}).bind(context)