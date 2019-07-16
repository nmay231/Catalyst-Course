import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinAlt, faSadCry, faMeh } from '@fortawesome/free-solid-svg-icons'

const Chirp = ({ user, chirpContent }) => {
    return (
        <div className="col-3 mb-4">
            <article className="card">
                <div className="card-header">
                    <h3><b>{user}</b> chirped</h3>
                </div>
                <div className="card-body">
                    <div className="card-text">
                        {chirpContent}
                    </div>
                </div>
                <div className="inline m-2 ml-auto">
                    <FontAwesomeIcon icon={faGrinAlt} className="m-1" style={{ cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faSadCry} className="m-1" style={{ cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faMeh} className="m-1" style={{ cursor: 'pointer' }} />
                </div>
            </article>
        </div>
    )
}

export default Chirp
