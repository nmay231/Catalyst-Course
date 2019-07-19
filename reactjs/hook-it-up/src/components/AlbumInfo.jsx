import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardTitle, ButtonGroup, Button } from 'reactstrap'
import axios from 'axios'

import { PHOTO_URL } from '../consts'
import PhotoInfo from './PhotoInfo';

const image_style = {
    width: 150,
    height: 150,
}

const AlbumInfo = ({ id, title, compact }) => {
    let [photos, setPhotos] = useState([])
    let [chunks, setChunks] = useState(1)

    useEffect(() => {
        (async () => {
            try {
                let photoData = (await axios.get(
                    PHOTO_URL,
                    { params: { albumId: id } },
                )).data
                if (compact) {
                    setPhotos(photoData.slice(0, 5))
                } else {
                    setPhotos(photoData)
                }
            } catch (err) {
                console.error(err)
            }
        })()
    }, [id, compact])

    let addendum
    if (compact) {
        addendum = (
            <div style={image_style} className="d-flex justify-content-center">
                <span className="align-self-center text-center">and many, many
                                <Link to={'/album/' + id + '/details'}> more images! </Link>
                </span>
            </div>
        )
    } else {
        addendum = (
            <div className="col-12 d-flex justify-content-center mt-2">
                <ButtonGroup>
                    <Button onClick={() => setChunks(chunks - 1)}
                        disabled={chunks <= 1}> Load Less Photos </Button>
                    <Button onClick={() => setChunks(chunks + 1)}
                        disabled={chunks >= photos.length / 21}> Load More Photos </Button>
                </ButtonGroup>
            </div>
        )
    }

    return (
        <div className={compact ? 'col-xl-6 my-2' : 'col-12 my-4'}>
            <Card>
                <CardHeader>
                    <CardTitle><h4>
                        Album: {title}
                    </h4></CardTitle>
                </CardHeader>
                <CardBody className="d-flex flex-wrap">
                    {photos.slice(0, 21 * chunks).map(photo => <PhotoInfo key={photo.id}
                        src={photo.thumbnailUrl} style={image_style} />)}
                    {addendum}
                </CardBody>
            </Card>
        </div>
    )
}

export default AlbumInfo
