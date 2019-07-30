import * as express from 'express'
import * as cors from 'cors'

import chirpstore from '../../../chirpstore'
let { createChirp, deleteChirp, getChirps, getChirp, updateChirp } = chirpstore

let router = express.Router()

router.use(cors())
router.use(express.json())

router.post('/', (req, res) => {
    if (req.body.user && req.body.message) {
        createChirp({
            upVotes: 0,
            ...req.body
        })
        res.status(200).send('success')
    } else {
        res.status(400).send('Error: the chirp must have "user" and "message" attributes')
    }
})

router.get('/', (req, res) => {
    res.json(getChirps())
})

router.get('/:id', (req, res) => {
    res.json(getChirp(req.params.id))
})

router.put('/:id', ({ body, params }, res) => {
    if (body.user && body.message) {
        updateChirp(params.id, {
            upVotes: 0,
            ...body,
        })
        res.status(200).send('success')
    } else {
        res.status(400).send('The chirp must have "user" and "message" attributes')
    }
})

router.delete('/:id', (req, res) => {
    let chirp = getChirp(req.params.id)
    deleteChirp(req.params.id)
    // Sending deleted chirp for convenience
    res.status(200).json(chirp)
})

export default router