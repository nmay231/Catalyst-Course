import * as express from 'express'
import chirpsRouter from './chirps'

let apiRouter = express.Router()

apiRouter.use('/chirps', chirpsRouter)

export default apiRouter