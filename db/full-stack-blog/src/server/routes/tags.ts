import { Router } from 'express'

import knextion from '../db'
// tags(id, name, _created)

let router = Router()

router.get('/:id?', async (req, res) => {
    try {
        if (req.params.id) {
            res.status(200).json(await knextion('tags').where('id', req.params.id).select())
        } else {
            res.status(200).json(await knextion('tags').select())
        }
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    try {
        let { tag, tags }: { tag: string, tags: string[] } = req.body
        if (tag) {
            await knextion('tags').insert({ name: tag })
        } else if (tags) {
            await knextion('tags').insert(tags.map(name => ({ name })))
        } else {
            return res.status(400).json('Missing `tag` or `tags` in body')
        }
        res.sendStatus(200)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})

router.put('/:id', async (req, res) => {
    let id: number = req.params.id
    let name: string = req.body.name
    try {
        await knextion('tags').where('id', id).update({ name })
        res.sendStatus(200)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req, res) => {
    let id: number = req.params.id
    try {
        await knextion('blogs_tags').where('tagid', id).del()
        await knextion('tags').where('id', id).del()
        res.sendStatus(200)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})

export default router