import { Router } from 'express'

import BlogsAPI from './blogs'
import TagsAPI from './tags'
import AuthorsAPI from './authors'
import DonationsAPI from './donations'

const router = Router()

router.use('/blogs', BlogsAPI)
router.use('/tags', TagsAPI)
router.use('/authors', AuthorsAPI)
router.use('/donations', DonationsAPI)

router.use('*', (req, res) => {
    res.status(404).json('Unknown endpoint')
})

export default router