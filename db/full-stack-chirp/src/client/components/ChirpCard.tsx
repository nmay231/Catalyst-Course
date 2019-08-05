import React from 'react'
import { Link } from 'react-router-dom'


import { Chirp } from '../utils/consts'

const ChirpCard: React.FunctionComponent<IPropsChirpCard> = ({ chirp: { user, message }, id }) => {

    return (
        <div className="col-md-6 col-lg-4 mt-4">
            <article className="card">
                <div className="card-header">
                    <h4 className="card-title"> <b>{user}</b> chirped </h4>
                </div>
                <div className="card-body d-flex">
                    <p className="card-text"> {message} </p>
                    <Link to={`/chirp/${id}/admin`} className="ml-auto mt-auto mb-2">
                        <button className="btn btn-primary text-nowrap">
                            Admin Options
                        </button>
                    </Link>
                </div>
            </article>
        </div>
    )
}

interface IPropsChirpCard {
    chirp: Chirp,
    id?: number,
}

export default ChirpCard
