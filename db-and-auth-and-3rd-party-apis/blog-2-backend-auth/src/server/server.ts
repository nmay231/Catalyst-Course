import * as express from 'express'
import * as helmet from 'helmet'
import * as path from 'path'

import apiRouter from './routes'
import morgan = require('morgan')

if (!process.env.LOADED) {
    throw Error('".env" file not found! Please edit the dev.env or prod.env file in /config/')
}

const app = express()
app.use(helmet())
app.use(morgan('dev'))

app.use(express.static('public'))
app.use('/api', apiRouter)

app.use('*', (req, res) => res.sendFile(
    path.resolve(__dirname, '../public/index.html'),
))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening on port: ${port}`))
