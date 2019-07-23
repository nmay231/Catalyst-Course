const express = require('express')
const APIRouter = require('./routes')
const path = require('path')
const morgan = require('morgan')

let app = express()

app.use(morgan('dev'))

app.use('/', express.static(path.join(__dirname, '../client/')))

app.use('/api', APIRouter)

const port = 3000

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})