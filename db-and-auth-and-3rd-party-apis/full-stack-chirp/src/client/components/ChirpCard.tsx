import React, { useEffect, useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

import { IChirp, USERS_API, CHIRPS_API } from '../utils/consts'
import fakeAxios from '../utils/fakeAxios'

interface ChirpCardProps extends RouteComponentProps {
    id: number,
    loggedin?: number,
    chirp?: IChirp,
    editable?: boolean,
}

const ChirpCard: React.FC<ChirpCardProps> = ({ id, chirp, loggedin, editable, history }) => {

    const [author, setAuthor] = useState('')

    if (!chirp) {
        // get chirp by id
    }

    useEffect(() => {
        (async () => {
            let user = await fakeAxios(USERS_API + `/${chirp.userid}`)
            if (user.id === loggedin) {
                setAuthor('You')
            } else {
                setAuthor(user.name)
            }
        })()
    }, [chirp.userid])

    const deleteSelf = () => {
        fakeAxios(CHIRPS_API + `/${chirp.id}`, 'DELETE')
            .then(() => {
                history.go(0)
            })
    }

    return (
        <div className="col-lg-4">
            <div className="card my-2">
                <div className="card-body">
                    <h4 className="card-title">
                        <b>{author}</b> Chirped
                    </h4>
                    <hr />
                    <div className="card-text d-flex">
                        {chirp.text}
                        {editable &&
                            <>
                                <div className="btn-group ml-auto mt-auto mb-1">
                                    <button className="btn btn-primary" type="button"
                                        onClick={() => history.push(`/chirp/edit/${chirp.id}`)}>Edit</button>
                                    <button className="btn btn-danger" type="button"
                                        onClick={deleteSelf}>Delete</button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ChirpCard)
