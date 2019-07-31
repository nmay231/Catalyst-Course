import { useContext, useEffect } from 'react'

import fakeAxios from './fakeAxios'
import { CHIRPS_API, Chirp, chirpTemplate } from './consts'
import { ChirpsContext } from '../components/ChirpsContext'

const useChirpstore = () => {

    const [chirps, setChirps] = useContext(ChirpsContext)

    async function getChirp(id: number) {
        try {
            return await fakeAxios(CHIRPS_API + `/${id}`)
        } catch (err) {
            console.error(`Failed to get chirp with id=${id}`)
        }
    }

    function createChirp(chirp: Chirp): void {
        fakeAxios(CHIRPS_API, 'POST', { ...chirp })
            .catch((err) => console.error('Failed to post new chirp to api\n', err))
            .then((res) => {
                refreshChirps()
            })
    }

    function updateChirp(id: number, chirp: Chirp): void {
        fakeAxios(CHIRPS_API + `/${id}`, 'PUT', { ...chirp })
            .catch((err) => console.log(`Failed to update chirp with id=${id}\n`, err))
            .then((res) => {
                refreshChirps()
            })
    }

    function deleteChirp(id: number): void {
        fakeAxios(CHIRPS_API + `/${id}`, 'DELETE')
            .catch((err) => console.error(`Failed to delete chirp with id=${id}\n`, err))
            .then((res) => {
                refreshChirps()
            })
    }

    async function refreshChirps() {
        let temp: Chirp[] = await fakeAxios(CHIRPS_API)
        setChirps(temp.filter((c) => c !== null))
    }

    return {
        getChirp,
        createChirp,
        updateChirp,
        deleteChirp,
        chirps,
        chirpTemplate,
        refreshChirps,
    }
}

export default useChirpstore