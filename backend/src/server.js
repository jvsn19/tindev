import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'
import config from '../../config.json'

const server = express()
mongoose.connect(`mongodb+srv://${config.user}:${config.password}@cluster0-ixljb.mongodb.net/tinderdev?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

server.use(express.json())
server.use(routes)

server.listen(8080)