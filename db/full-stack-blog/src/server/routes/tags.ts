import { Router } from 'express'

let router = Router()

router.get('/', (req, res) => res.send('yo tags'))

export default router