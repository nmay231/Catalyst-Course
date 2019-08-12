import { Router } from 'express'
import 'dotenv'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import BlogsAPI from './blogs'
import TagsAPI from './tags'

const router = Router()

router.use(cors())
router.use(express.json())
router.use(morgan('dev'))

router.use('/blogs', BlogsAPI)
router.use('/tags', TagsAPI)

router.use('/login/luke', (req, res) => { })

router.use('*', (req, res) => {
    res.status(404).json('Unknown endpoint!')
})

export default router