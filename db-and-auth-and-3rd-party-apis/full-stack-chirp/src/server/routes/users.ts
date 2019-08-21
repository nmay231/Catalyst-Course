import * as express from 'express'

import { Users } from '../db'

const router = express.Router()

router.get('/', async (req, res) => res.status(200).json(
    await Users.getAll()
))

router.get('/login', (req, res) => {
    let [name, password] = req.headers.authorization.split(':')
    Users.validLogin(name, password)
        .then(async (valid) => {
            if (valid) { // This is totally a secure login
                res.status(200).json({
                    valid,
                    userid: (await Users.getByName(name))[0].id,
                })
            } else {
                res.status(401).json({ valid, userid: null })
            }
        })
})

router.get('/:id', async (req, res) => res.status(200).json(
    (await Users.getOne(parseInt(req.params.id)))[0]
))

router.post('/', (req, res) => {
    let { name, email, password }: { name: string, email: string, password?: string } = req.body
    Users.create(name, email, password)
        .then(() => res.sendStatus(200))
})

router.put('/:id', (req, res) => {
    let { name, email }: { name: string, email: string } = req.body
    Users.update(parseInt(req.params.id), name, email)
        .then(() => res.sendStatus(200))
})

router.put('/:id/password', (req, res) => {
    let { password }: { password: string } = req.body
    Users.updatePassword(parseInt(req.params.id), password)
        .then(() => res.sendStatus(200))
})

router.delete('/:id', (req, res) =>
    Users.deleteUser(parseInt(req.params.id))
        .then(() => res.sendStatus(200))
)

export default router