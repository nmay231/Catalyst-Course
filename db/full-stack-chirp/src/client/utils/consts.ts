// users(id, name, email, password)
// chirps(id, userid, text, location)

export interface IUser {
    id: number,
    name: string,
    email: string,
    password?: string, // Why this is optional, I don't know...
}

export interface IChirp {
    id: number,
    userid: number,
    text: string,
    location?: string,
}

// export const chirpTemplate: IChirp = {
//     user: 'New User',
//     message: 'Message'
// }

export const userTemplate: IUser = {
    id: -1,
    name: 'Guest',
    email: 'guest@guest.com',
    password: null,
}

export const CHIRPS_API = 'http://localhost:3000/api/chirps'
export const USERS_API = 'http://localhost:3000/api/users'
