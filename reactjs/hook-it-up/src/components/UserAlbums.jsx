import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardBody, CardTitle, Button, ButtonGroup } from 'reactstrap'
import axios from 'axios'

import AlbumInfo from './AlbumInfo'
import { ALBUM_URL } from '../consts'

const UserAlbums = ({ user, expanded }) => {
    let [albums, setAlbums] = useState([])
    let [expanded_, setExpanded] = useState(Boolean(expanded))
    let [chunks, setChunks] = useState(1)

    useEffect(() => {
        (async () => {
            try {
                setAlbums((await axios.get(
                    ALBUM_URL,
                    { params: { userId: user.id } }
                )).data)
            } catch (err) {
                console.error(err)
            }
        })()
    }, [user.id])

    let displayedAlbums = (albums.slice(0, 4 * chunks))
        .map(album => <AlbumInfo key={album.id} {...album} compact />)

    const arrowStyle = {
        cursor: 'pointer',
        transition: '0.5s ease-out',
        transform: (expanded_ ? 'rotate(90deg)' : 'rotate(0deg)'),
    }

    return (
        <Card className="mt-3 col-12" style={{ display: 'flex' }}>
            <CardHeader className="mx-n3">
                <CardTitle><h4 className="d-flex">
                    {user.name}'s Albums
                    <span
                        onClick={() => setExpanded(!expanded_)}
                        className="ml-auto"
                        style={arrowStyle}> &gt; </span>
                </h4></CardTitle>
            </CardHeader>
            <CardBody className="row" style={{ display: expanded_ ? 'flex' : 'none' }}>
                {displayedAlbums}
                <div className="col-12 d-flex justify-content-center">
                    <ButtonGroup>
                        <Button onClick={() => setChunks(chunks - 1)}
                            disabled={chunks <= 1}> Load Less Albums </Button>
                        <Button onClick={() => setChunks(chunks + 1)}
                            disabled={chunks >= albums.length / 4}> Load More Albums </Button>
                    </ButtonGroup>
                </div>
            </CardBody>
        </Card>
    )
}

export default UserAlbums
