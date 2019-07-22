const express = require('express')
const chirpsRouter = require('./chirps')

let APIRouter = express.Router()

APIRouter.use('/chirps', chirpsRouter)

module.exports = APIRouter