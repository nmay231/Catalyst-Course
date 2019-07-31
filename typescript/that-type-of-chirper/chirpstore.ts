import * as fs from 'fs'

export interface Chirp {
    user: string,
    message: string,
}

function ChirpStore() {
    let chirps: Chirp[] = []
    let nextid: number = 0
    if (fs.existsSync('chirps.json')) {
        chirps = JSON.parse(fs.readFileSync('chirps.json').toString())
        nextid = chirps.length
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
        chirps.splice(id, 1)
        writeChirps()
    }

    let writeChirps = (): void => {
        fs.writeFileSync('chirps.json', JSON.stringify(chirps))
    }
    return { getChirp, getChirps, createChirp, updateChirp, deleteChirp }
}

export default ChirpStore()