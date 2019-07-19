import React, { useEffect, useState } from 'react'
import axios from 'axios'

import AlbumInfo from '../components/AlbumInfo'
import { ALBUM_URL } from '../consts'

const AlbumPage = ({ match }) => {
    const [album, setAlbum] = useState({})

    useEffect(() => {
        (async () => {
            try {
                setAlbum((await axios.get(ALBUM_URL + '/' + match.params.id)).data)
            } catch (err) {
                console.error(err)
            }
        })()
    }, [match.params.id])

    return (
        <section className="row">
            <AlbumInfo {...album} />
        </section>
    )
}

export default AlbumPage
