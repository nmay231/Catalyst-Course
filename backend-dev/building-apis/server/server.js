const express = require('express')
const APIRouter = require('./routes')

let app = express()

app.use('/api', APIRouter)

app.listen(3000)