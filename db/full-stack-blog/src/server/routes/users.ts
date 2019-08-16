import { Router } from 'express'

import knextion from '../db'
// authors(id, name, email, _created)

let router = Router()

router.get('/:id?', async (req, res) => {
    try {
        if (req.params.id) {
            let blog = await knextion('authors').where({ id: req.params.id }).select()
            res.status(200).json(blog[0])
        } else {
            let blogs = await knextion.select().from('authors')
            res.status(200).json(blogs)
        }
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})

router.post('/', async (req, res) => {
    try {
        let { name, email } = req.body
        await knextion('authors').insert({ name, email })
        res.sendStatus(200)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})

router.put('/:id', async (req, res) => {
    try {
        let { name, email } = req.body
        await knextion('authors').where('id', req.params.id).update({ name, email })
        res.sendStatus(200)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})

router.delete('/:id', async (req, res) => {
    let id = req.params.id
    try {
        await knextion('blogs_tags').join('blogs', 'blogs.authorid', '=', id)
            .where('blogs_tags.blogid', '=', 'blogs.id').del()
        await knextion('blogs').where('authorid', '=', id).del()
        await knextion('authors').where('id', '=', id).del()
        res.sendStatus(200)
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})

export default router