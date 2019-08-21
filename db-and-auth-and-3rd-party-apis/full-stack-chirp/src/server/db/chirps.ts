import { Query } from './index'

// chirps(id, userid, text, location, _created)

const getAll = () => Query('SELECT * FROM chirps')
const getOne = (id: number) => Query('SELECT * FROM chirps WHERE id=?', [id])

const getAllIds = () => Query('SELECT id FROM chirps')

const getChirpsBy = (userid: number) => Query('SELECT * FROM chirps WHERE userid=?', [userid])

const create = (userid: number, text: string, location?: string) => {
    let loc = location ? ', location' : '',
        val = location ? ', ?' : ''
    return Query(`INSERT INTO chirps (userid, text${loc}) VALUES (?, ?${val})`,
        [userid, text, location])
}

const update = (id: number, userid: number, text: string, location?: string) => {
    if (location) {
        return Query('UPDATE chirps SET userid=?, text=?, location=? WHERE id=?',
            [userid, text, location, id])
    }
    return Query('UPDATE chirps SET userid=?, text=? WHERE id=?',
        [userid, text, id])
}

const deleteChirp = (id: number) =>
    Query('DELETE FROM chirps WHERE id=?', [id])

export default {
    getAll,
    getOne,
    getAllIds,
    getChirpsBy,
    create,
    update,
    deleteChirp,
}