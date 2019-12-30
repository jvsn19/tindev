import express from 'express'
import DevController from './controllers/DevController'
import LikeController from './controllers/LikeController';
import DislikeController from './controllers/DislikeController';

const routes = express.Router()

routes.get('/devs', DevController.index)
routes.post('/dev', DevController.store)
routes.post('/like', LikeController.store)
routes.post('/dislike', DislikeController.store)

export default routes