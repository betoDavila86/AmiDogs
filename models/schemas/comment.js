const { Schema, Types: { ObjectId } } = require('mongoose');

module.exports = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    created: { type: Date, required: true, default: Date.now },

    commentedTo: [
        {
            type: ObjectId,
            ref: 'Dog',
            created: Date.now()
        }
    ],

    poster: {
        type: ObjectId,
        ref: 'User'
    }

})