const { model } = require('mongoose')
const dog = require('./schemas/dog')
const user = require('./schemas/user')
const comment = require('./schemas/comment')

module.exports = {
    User: model('User', user),
    Dog: model('Dog', dog),
    Comment: model('Comment', comment)
}