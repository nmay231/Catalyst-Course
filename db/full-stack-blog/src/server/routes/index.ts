import { Router } from 'express'
import 'dotenv'
import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'

import BlogsAPI from './blogs'
import TagsAPI from './tags'
import UsersAPI from './users'

const router = Router()

router.use(cors())
router.use(express.json())
router.use(morgan('dev'))

router.use('/blogs', BlogsAPI)
router.use('/tags', TagsAPI)
router.use('/users', UsersAPI)

router.use('/login/luke', (req, res) => { })

router.use('*', (req, res) => {
    res.status(404).json('Unknown endpoint!')
})

export default router