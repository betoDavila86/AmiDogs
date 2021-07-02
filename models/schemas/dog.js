const { Schema, Types: { ObjectId } } = require('mongoose');

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },

    breed: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true,
    },

    image: {
        type: String
    },

    walkLocation: {
        type: {
            latitude: { type: Number },
            longitude: { type: Number },
            latitudeDelta: { type: Number },
            longitudeDelta: { type: Number }
        }
    },

    character: {
        enum: ['asustadizo', 'sociable', 'reactivo', 'agresivo'],
        required: true
    },

    size: {
        enum: ['pequeño', 'mediano', 'grande'],
        required: true
    },

    owner: {
        type: ObjectId,
        ref: 'User'
    },

    friends: [
        {
            type: ObjectId,
            ref: 'Dog'
        }
    ]

})