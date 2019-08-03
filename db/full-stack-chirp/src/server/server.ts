import * as express from 'express'
import * as morgan from 'morgan'
import * as path from 'path'

import apiRouter from './routes'

require('dotenv').config()
if (!process.env) {
    throw Error('Must provide environment file ".env"')
} else {
    console.log('Loaded environment file successfully')
}

const app = express()

app.use(morgan('dev'))

app.use(express.static('public'))
app.use('/api', apiRouter)

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening on port: ${port}`))
