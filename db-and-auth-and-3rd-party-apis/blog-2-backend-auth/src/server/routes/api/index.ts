import { Router, RequestHandler } from 'express'

import BlogsAPI from './blogs'
import TagsAPI from './tags'
import UsersAPI from './users'

const router = Router()

router.use('/blogs', BlogsAPI)
router.use('/tags', TagsAPI)
router.use('/users', UsersAPI)

router.use('/login/luke', (req, res) => { })

router.use('*', (req, res) => {
    res.status(404).json('Unknown endpoint!')
})

export default router