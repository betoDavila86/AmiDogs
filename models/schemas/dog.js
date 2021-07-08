const { Schema, Types: { ObjectId } } = require('mongoose');

module.exports = new Schema({
    nameDog: {
        type: String,
        required: true
    },

    breed: {
        type: String,
        required: true
    },

    age: {
        type: String,
        enum: ['cachorro', 'joven', 'adulto', 'senior'],
        required: true
    },

    gender: {
        type: String,
        enum: ['macho', 'hembra'],
        required: true
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
        type: String,
        enum: ['asustadizo', 'sociable', 'reactivo', 'tímido'],
        required: true
    },

    size: {
        type: String,
        enum: ['pequeño', 'mediano', 'grande'],
        required: true
    },

    description: {
        type: String
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
    ],

    comments: [
        {
            type: ObjectId,
            ref: 'Comment'
        }
    ]

})