import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


import { Chirp } from '../utils/consts'

const ChirpCard: React.FunctionComponent<IPropsChirpCard> = ({ expanded, chirp: { user, message }, id }) => {

    let width = expanded ? 'col-6' : 'col-md-6 col-lg-4'

    return (
        <div className={width}>
            <article className="card">
                <div className="card-header">
                    <h4 className="card-title"> <b>{user}</b> chirped </h4>
                </div>
                <div className="card-body">
                    <p className="card-text"> {message} </p>
                </div>
                {!expanded &&
                    <Link to={`/chirp/${id}/admin`}>
                        <button className="btn btn-primary">
                            Admin
                        </button>
                    </Link>
                }
            </article>
        </div>
    )
}

interface IPropsChirpCard {
    expanded?: boolean,
    chirp: Chirp,
    id?: number,
}

// ChirpCard.defaultProps = {
//     chirp: { user: "", message: "" }
// }

export default ChirpCard
