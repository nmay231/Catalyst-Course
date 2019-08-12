import { Router } from 'express'

import knextion from '../db'

let router = Router()

router.get('/:id?', async (req, res) => {
    try {
        if (req.params.id) {
            let blog = await knextion('blogs').where({ id: req.params.id }).select()
            res.status(200).json(blog[0])
        } else {
            let blogs = await knextion.select().from('blogs')
            res.status(200).json(blogs)
        }
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    try {
        let { title, content, authorid } = req.body
        await knextion('blogs').insert({ title, content, authorid })
        res.sendStatus(200)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let { title, content, authorid } = req.body
        await knextion('blogs').where('id', req.params.id).update({
            title,
            content,
            authorid,
        })
        res.sendStatus(200)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await knextion('blogs').where('id', req.params.id).delete()
        res.sendStatus(200)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})

export default router