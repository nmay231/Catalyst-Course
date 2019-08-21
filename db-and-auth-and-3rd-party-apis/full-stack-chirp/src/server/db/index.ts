import * as mysql from 'mysql'

import Users from './users'
import Chirps from './chirps'

require('dotenv').config()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
})
db.connect((err) => {
    if (err) {
        console.error('Could not connect to db\n', err)
    }
})

const Query = (query: string, values?: (string | number)[]) => {
    return new Promise<any[]>((resolve, reject) => {
        db.query(query, values, (err, results) => {
            if (err) {
                console.error(err)
                return reject(err)
            }
            return resolve(results)
        })
    })
}

export default db
export {
    Query,
    Users,
    Chirps,
}