import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinStars as regStars } from '@fortawesome/free-regular-svg-icons'
import { faGrinStars as solidStars } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

let style = {
    cursor: 'pointer',
}

const Emoji = props => {
    return (
        <span className="m-2">
            <FontAwesomeIcon
                onClick={props.onClick}
                icon={props.icon || faLink}
                style={{ ...style, ...props.style }} />
        </span>
    )
}

export default Emoji
export { faLink as link, regStars, solidStars }