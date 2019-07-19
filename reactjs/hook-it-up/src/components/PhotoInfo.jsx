import React, { } from 'react'
import { Media } from 'reactstrap'

const PhotoInfo = ({ style, src }) => {
    return (
        <Media>
            <Media left top style={style}>
                <Media object src={src} alt="useless example image" />
            </Media>
        </Media>
    )
}

export default PhotoInfo
