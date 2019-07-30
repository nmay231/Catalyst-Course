import { useContext, useEffect } from 'react'

import fakeAxios from './fakeAxios'
import { CHIRPS_API, Chirp, chirpTemplate } from './consts'
import { ChirpsContext } from '../components/ChirpsContext'

const useChirpstore = () => {

    const [chirps, setChirps] = useContext(ChirpsContext)

    function createChirp(chirp: Chirp): void {
        fakeAxios(CHIRPS_API, 'POST', { chirp })
            .catch((err) => console.error('Failed to post new chirp to api\n', err))
            .then((res) => {
                return fakeAxios(CHIRPS_API)
            })
            .then(({ data }) => {
                setChirps([...data, chirp])
            })
    }

    function updateChirp(id: number, chirp: Chirp): void {
        fakeAxios(CHIRPS_API, 'PUT', { chirp })
            .catch((err) => console.error(`Failed to update chirp with id=${id}\n`, err))
            .then((res) => {
                (async () => {
                    setChirps(await fakeAxios(CHIRPS_API))
                })
            })
    }

    function deleteChirp(id: number): void {
        fakeAxios(CHIRPS_API + `/${id}`, 'DELETE')
            .catch((err) => console.log(`Failed to delete chirp with id=${id}\n`, err))
            .then((res) => {
                (async () => {
                    setChirps(await fakeAxios(CHIRPS_API))
                })
            })
    }

    return {
        createChirp,
        updateChirp,
        deleteChirp,
        chirps,
        chirpTemplate,
    }
}

export default useChirpstore