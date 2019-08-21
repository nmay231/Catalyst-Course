import * as express from 'express'

import usersRouter from './users'
import chirpsRouter from './chirps'
// import mentionsRouter from './mentions'

const router = express.Router()

router.use(express.json())

router.use('/users', usersRouter)
router.use('/chirps', chirpsRouter)
// router.use('/mentions', mentionsRouter) We're not there yet

router.use('*', (req, res) => {
    res.sendStatus(404)
})

export default router