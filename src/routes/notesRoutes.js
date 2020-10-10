// Import our Controllers
const notesController = require('../controllers/notesController')

const routes = [
    {
        method: 'GET',
        url: '/v1/notes',
        handler: notesController.getNotes
    },
    {
        method: 'GET',
        url: '/v1/notes/:id',
        handler: notesController.getNote
    },
    {
        method: 'POST',
        url: '/v1/notes',
        handler: notesController.addNote
    },
    {
        method: 'PUT',
        url: '/v1/notes/:id',
        handler: notesController.updateNote
    },
    {
        method: 'DELETE',
        url: '/v1/notes/:id',
        handler: notesController.deleteNote
    }
]

module.exports = routes