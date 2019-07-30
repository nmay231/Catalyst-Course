import React, { useState, useEffect } from 'react'

import { CHIRPS_API, Chirp } from '../utils/consts'
import fakeAxios from '../utils/fakeAxios'

const ChirpsContext = React.createContext<[Chirp[], (chirps: Chirp[]) => void]>([[], () => { }])

const ChirpsProvider: React.FunctionComponent = ({ children }) => {
    const [chirps, setChirps] = useState<Chirp[]>([])

    useEffect(() => {
        try {
            (async () => {
                setChirps(await fakeAxios(CHIRPS_API))
            })()
        } catch (err) {
            console.error(err)
        }
    }, [])

    return (
        <ChirpsContext.Provider value={[chirps, setChirps]}>
            {children}
        </ChirpsContext.Provider>
    )
}

export { ChirpsProvider, ChirpsContext }
