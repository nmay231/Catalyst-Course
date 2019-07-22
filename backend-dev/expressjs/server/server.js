const express = require('express')
const path = require('path')
const fs = require('fs')
const jsonfile = require('jsonfile')
const bodyParser = require('body-parser')


const app = express()
const FILE_PATH = 'server/favs.json'

app.use('/', (req, res, next) => {
    console.log('Visit to: ', req.url)
    next()
})

app.get('/', (req, res) => {
    res.send('Hello from the server siiiiide! <br/>' +
        '<a href="/public">Go to the public folder</a> <br/>' +
        '<a href="/formsubmissions">Or see previous submissions</a>')
})

app.use('/public', express.static(path.join(__dirname, '../public/')))


app.get('/formsubmissions', async (req, res) => {
    if (!fs.existsSync(FILE_PATH)) {
        res.send('No submissions yet')
        return
    }
    // I just don't want to write that try-catch boilerplate...
    let data = await jsonfile.readFile(FILE_PATH)
    // Nor format the resonse data...
    res.send(data)
})


app.use(bodyParser.urlencoded({
    extended: false
}))

app.post('/submitfavs', async (req, res) => {
    if (!fs.existsSync(FILE_PATH)) {
        await jsonfile.writeFile(FILE_PATH, [], {
            spaces: 2
        })
    }

    let prev
    try {
        prev = await jsonfile.readFile(FILE_PATH)
    } catch (err) {
        console.error(err)
        res.send('Failed to read data... The file refused to associate with your favs')
        return
    }
    prev.push({
        fruit: req.body.fruit,
        movie: req.body.movie,
        book: req.body.book,
        timeStamp: Date.now(),
    })

    try {
        jsonfile.writeFile(FILE_PATH, prev, {
            spaces: 2
        })
        console.log('Successfully added data to favs.json')
        res.send('Don\'t worry. We won\'t make fun of your choices too much...')
    } catch (err) {
        console.error(err)
        res.send('Failed to write data... Your favs were too strange or something')
    }
})

app.listen(3000)