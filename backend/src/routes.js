import express from 'express'

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({
        message: `Hello ${req.query.name}`
    })
})

routes.post('/dev', (req, res) => {
    return res.json({request: req.body, status: 'OK'})
})

export default routes