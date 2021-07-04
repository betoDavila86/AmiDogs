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
        enum: ['cachorro', 'joven', 'adulto', 'senior'],
        required: true,
    },

    gender: {
        enum: ['macho', 'hembra'],
        required: true
    },

    image: {
        type: String,
        required: true
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
        enum: ['asustadizo', 'sociable', 'reactivo', 'tímido'],
        required: true
    },

    size: {
        enum: ['pequeño', 'mediano', 'grande'],
        required: true
    },

    description: {
        type: String,
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