import * as fs from 'fs'

export interface Chirp {
    user: string,
    message: string,
    upVotes: number,
}

function ChirpStore() {
    let chirps: Chirp[] = []
    let nextid: number = 0
    if (fs.existsSync('chirps.json')) {
        ( // You have to wrap with () to destructure it...  ¯\_(ツ)_/¯
            { chirps, nextid } = JSON.parse(fs.readFileSync('chirps.json').toString())
        )
    }

    let getChirps = (): Chirp[] => {
        return [...chirps]
    }

    let getChirp = (id: number): Chirp => {
        return Object.assign({}, chirps[id])
    }

    let createChirp = (chirp: Chirp): void => {
        chirps[nextid++] = chirp
        writeChirps()
    }

    let updateChirp = (id: number, chirp: Chirp): void => {
        chirps[id] = chirp
        writeChirps()
    }

    let deleteChirp = (id: number): void => {
        delete chirps[id]
        writeChirps()
    }

    let writeChirps = (): void => {
        fs.writeFileSync('chirps.json', JSON.stringify({ chirps, nextid }))
    }
    return { getChirp, getChirps, createChirp, updateChirp, deleteChirp }
}

export default ChirpStore()