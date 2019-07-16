import React from 'react'
import Chirp from './Chirp'

const ChirpFeed = ({ chirps }) => {
    if (chirps === null) {
        chirps = []
    }
    return (
        <section className="row">
            {chirps.map(chirp => <Chirp {...chirp} />)}
        </section>
    )
}

export default ChirpFeed

