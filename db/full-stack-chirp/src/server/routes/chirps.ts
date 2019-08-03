import * as express from 'express'

import { Chirps } from '../db'

const router = express.Router()

router.get('/', async (req, res) => res.status(200).json(
    await Chirps.getAll()
))

router.get('/:id', async (req, res) => res.status(200).json(
    (await Chirps.getOne(parseInt(req.params.id)))[0]
))

router.get('/byuser/:userid', async (req, res) => res.status(200).json(
    await Chirps.getChirpsBy(parseInt(req.params.userid))
))

router.post('/', (req, res) => {
    let { userid, text, location }: { userid: number, text: string, location?: string } = req.body
    Chirps.create(userid, text, location)
        .then(() => res.sendStatus(200))
})

router.put('/:id', (req, res) => {
    let { userid, text, location }: { userid: number, text: string, location?: string } = req.body
    Chirps.update(parseInt(req.params.id), userid, text, location)
        .then(() => res.sendStatus(200))
})

router.delete('/:id', (req, res) => {
    Chirps.deleteChirp(parseInt(req.params.id))
        .then(() => res.sendStatus(200))
})

export default router