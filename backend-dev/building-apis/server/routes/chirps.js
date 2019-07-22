const express = require('express')
const cors = require('cors')

const ChirpStore = require('../../chirpstore')
const {
    CreateChirp,
    DeleteChirp,
    GetChirps,
    GetChirp,
    UpdateChirp,
} = ChirpStore

let router = express.Router()

router.use(cors())
router.use(express.json())

router.post('/', (req, res) => {
    if (req.body.user && req.body.message) {
        CreateChirp({
            upVotes: 0,
            ...req.body
        })
        res.statusCode = 200
        res.send('success')
    } else {
        res.statusCode = 400
        res.send('Error: the chirp must have "user" and "message" attributes')
    }
})

router.get('/', (req, res) => {
    res.json(GetChirps())
})

router.get('/:id', (req, res) => {
    res.json(GetChirp(req.params.id))
})

router.put('/:id', (req, res) => {
    if (req.body.user && req.body.message) {
        UpdateChirp(req.params.id, {
            upVotes: 0,
            ...req.body
        })
        res.statusCode = 200
        res.send('success')
    } else {
        res.statusCode = 400
        res.send('The chirp must have "user" and "message" attributes')
    }
})

router.delete('/:id', (req, res) => {
    let chirp = GetChirp(req.params.id)
    DeleteChirp(req.params.id)
    res.statusCode = 200
    res.json(chirp)
})

module.exports = router