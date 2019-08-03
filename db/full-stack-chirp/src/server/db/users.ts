import { Query } from './index'

// users(id, name, email, password?, _created)

const getAll = () => Query('SELECT * FROM users')
const getOne = (id: number) => Query('SELECT * FROM users WHERE id=?', [id])

const create = (name: string, email: string, password?: string) => {
    let pass = (password ? ', password' : ''), val = (password ? ', ?' : '')
    return Query(`INSERT INTO users(name, email${pass}) VALUES (?, ?${val})`,
        [name, email, password])
}

const update = (id: number, name: string, email: string) =>
    Query('UPDATE users SET name=?, email=? WHERE id=?', [name, email, id])


const updatePassword = (id: number, password: string) =>
    Query('UPDATE users SET password=? WHERE id=?', [password, id])

const deleteUser = (id: number) =>
    Query('DELETE FROM users WHERE id=?', [id])

export default {
    getAll,
    getOne,
    create,
    update,
    updatePassword,
    deleteUser,
}