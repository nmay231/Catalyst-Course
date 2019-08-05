import React from 'react'
import { Link } from 'react-router-dom'

import useChirpstore from '../utils/useChirpstore'
import ChirpCard from '../components/ChirpCard';

const HomePage = () => {
    const { chirps } = useChirpstore()

    return (<>
        <section className="row justify-content-center my-4">
            <Link to="/chirp/add" className="btn btn-primary">Add Chirp</Link>
        </section>
        <section className="row">
            {chirps.map((chirp, i) => <ChirpCard key={i} id={i} chirp={chirp} />)}
        </section>
    </>)
}

export default HomePage
