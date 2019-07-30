import React, { useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import ChirpCard from '../components/ChirpCard'
import { chirpTemplate } from '../utils/consts'
import { ChirpsContext } from '../components/ChirpsContext';

const ChirpPage: React.SFC<IPropsChirpPage> = ({ match: { params: { id } } }) => {
    let [chirps, setChirps] = useContext(ChirpsContext)

    console.log(id)
    let chirp = id ? chirps[parseInt(id)] : chirpTemplate
    console.log(chirp, chirps[parseInt(id)])
    return (
        <div>
            <ChirpCard expanded chirp={{ user: chirp.user, message: chirp.message }} />
        </div>
    )
}

interface IPropsChirpPage extends RouteComponentProps<{ id?: string }> { }

export default ChirpPage
