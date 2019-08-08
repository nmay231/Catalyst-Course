import React, { useEffect, useState } from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

// import useChirpstore from '../utils/useChirpstore'
// import useLogin from '../utils/useLogin'
import ChirpCard from '../components/ChirpCard'

import fakeAxios from '../utils/fakeAxios'

import { USERS_API, IUser, userTemplate, CHIRPS_API, IChirp } from '../utils/consts'

interface HomePageProps {
    userid: number,
}

const HomePage: React.FC<HomePageProps> = ({ userid }) => {

    const [user, setUser] = useState<IUser>(userTemplate)
    const [chirps, setChirps] = useState<IChirp[]>([])

    useEffect(() => {
        if (userid === -1) {
            (async () => {
                setChirps(await fakeAxios(CHIRPS_API))
            })()
        } else if (userid !== null) {
            (async () => {
                setUser(await fakeAxios(USERS_API + `/${userid}`))
                setChirps(await fakeAxios(CHIRPS_API))
            })()
        }
    }, [userid])

    if (chirps.length === 0) {
        return (
            <div className="col-12 d-flex my-5">
                <div className="spinner-border mx-auto"></div>
            </div>
        )
    }

    return (<>
        <section className="row my-4">
            <h1 className="col-12 text-center my-3">Welcome {user.name}</h1>
            {chirps
                .filter((chirp) => chirp.userid !== userid)
                .map((chirp) => <ChirpCard key={chirp.id} id={chirp.id} chirp={chirp} loggedin={userid} />)
                .reverse()
            }
        </section>
    </>)
}

export default HomePage
