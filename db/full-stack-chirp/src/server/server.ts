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

app.use(morgan('dev', {
    // User info requests were cloging up the logs, so I skipped them
    skip: (req, res) => req.originalUrl.match(/\/api\/users\/[0-9]+/) !== null,
}))

app.use(express.static('public'))
app.use('/api', apiRouter)

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening on port: ${port}`))
