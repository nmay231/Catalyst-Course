import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import ChirpForm from '../components/ChirpForm'
import { chirpTemplate } from '../utils/consts'
import useChirpstore from '../utils/useChirpstore'

const ChirpPage: React.FC<IPropsChirpPage> = ({ match: { params: { id } } }) => {

    let { getChirp } = useChirpstore()

    const [chirp, setChirp] = useState(chirpTemplate)

    useEffect(() => {
        if (id) {
            (async () => {
                setChirp(await getChirp(parseInt(id)))
            })()
        }
    }, [id])
    return (
        <div>
            <ChirpForm chirp={{ ...chirp }} id={id ? parseInt(id) : -1} />
        </div>
    )
}

interface IPropsChirpPage extends RouteComponentProps<{ id?: string }> { }

export default ChirpPage
