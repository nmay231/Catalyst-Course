import React from 'react'
import Chirp from './Chirp'

const ChirpFeed = props => {
    let chirps = props.chirps.map(
        chirp => <Chirp {...chirp} />
    )
    return (
        <section className="row">
            {chirps}
        </section>
    )
}

export default ChirpFeed

