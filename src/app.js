require('dotenv/config');
const routes = require('./routes/notesRoutes');
const mongoose = require('mongoose');
const swagger = require('./config/swagger');

// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

fastify.register(require('fastify-cors'), { 
    origin: true
  })

// Declare a route
fastify.get('/', async (request, reply) => {
    return { user: "You are the user!" }
})

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Run the server!
const start = async () => {
    try {
        await fastify.listen(process.env.SERVER_PORT)
        fastify.swagger()
        fastify.log.info(`Server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

// Connect to DB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected…'))
    .catch(err => console.log(err))

// Register routes
routes.forEach((route, index) => {
    fastify.route(route)
})

start()