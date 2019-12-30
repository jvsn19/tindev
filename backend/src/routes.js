import express from 'express'
import DevController from './controllers/DevController'

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({
        message: `Hello ${req.query.name}`
    })
})

routes.get('/devs', DevController.index)
routes.post('/dev', DevController.store)

export default routes