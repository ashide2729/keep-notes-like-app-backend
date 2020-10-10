// External Dependancies
const mongoose = require('mongoose');

const note = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: [String]
    }
})

module.exports = mongoose.model('Note', note)