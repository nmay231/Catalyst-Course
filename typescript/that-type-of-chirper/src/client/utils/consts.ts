interface Chirp {
    user: string,
    message: string,
}

const chirpTemplate: Chirp = {
    user: 'New User',
    message: 'Message'
}

const CHIRPS_API = 'http://localhost:3000/api/chirps'

export { CHIRPS_API, Chirp, chirpTemplate }