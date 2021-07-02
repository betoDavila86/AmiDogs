const { ContentError } = require('../../../utils/custom-errors');
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

module.exports = {
    string(target, name, empty = true) {
        this.type(target, name, String)

        if (empty && !target.trim()) throw new ContentError(`${name} está vacío`)
    },

    stringFrontend(target, name, empty = true) {
        if (typeof target === 'undefined') throw new ContentError(`${name} está vacío`)

        this.type(target, name, String)

        if (empty && !target.trim()) throw new ContentError(`${name} está vacío`)
    },

    email(target) {
        if (!EMAIL_REGEX.test(target)) throw new ContentError(`${target} no es un email válido`)
    },

    type(target, name, type) {
        if (type === String || type === Number || type === Boolean) {
            type = type.name.toLowerCase()
            if (typeof target === 'number' && target.toString() === 'NaN') throw new TypeError(`${name} ${target} no es un ${type}`)
            if (typeof target !== type) throw new TypeError(`${name} ${target} no es un ${type}`)
        } else if (!(target instanceof type)) throw new TypeError(`${name} ${target} no es un ${type.name}`)
    }
}