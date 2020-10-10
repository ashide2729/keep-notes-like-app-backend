// External Dependancies
const boom = require('boom')

// Get Data Models
const Note = require('../models/notesModel')

// Get all note
exports.getNotes = async (req, reply) => {
    try {
        const notes = await Note.find()
        return notes
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single note by ID
exports.getNote = async (req, reply) => {
    try {
        const id = req.params.id
        const note = await Note.findById(id)
        return note
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new note
exports.addNote = async (req, reply) => {
    try {
        const note = new Note(req.body)
        return note.save()
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing note
exports.updateNote = async (req, reply) => {
    try {
        const id = req.params.id
        const note = req.body
        const { ...updateData } = note
        const update = await Note.findByIdAndUpdate(id, updateData, { new: true })
        return update
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a note
exports.deleteNote = async (req, reply) => {
    try {
        const id = req.params.id
        const note = await Note.findByIdAndRemove(id)
        return note
    } catch (err) {
        throw boom.boomify(err)
    }
}