import React, { useEffect, useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { Link } from 'react-router-dom'


import { IChirp, CHIRPS_API } from '../utils/consts'
import fakeAxios from '../utils/fakeAxios'
import ChirpCard from '../components/ChirpCard';

interface MyChirpsPage extends RouteComponentProps<{}> {
    userid: number,
}

const MyChirpsPage: React.FC<MyChirpsPage> = ({ userid, history }) => {

    if (userid === -1) {
        history.replace('/login')
        return (<></>)
    }

    const [chirps, setChirps] = useState<IChirp[]>([])

    useEffect(() => {
        if (userid) {
            (async () =>
                setChirps(await fakeAxios(CHIRPS_API + `/byuser/${userid}`))
            )()
        }
    }, [userid])

    if (userid === null) {
        return (<>
            <h1 className="col-12 text-center my-4">Your chirps</h1>
            <div className="col-12 d-flex my-5">
                <div className="spinner-border mx-auto"></div>
            </div>
        </>)
    }

    return (
        <section className="row">
            <h1 className="col-12 text-center my-4"> Your chirps</h1>
            {chirps.length > 0 ?
                chirps.map((chirp) => <ChirpCard key={chirp.id} id={chirp.id} chirp={chirp} loggedin={userid} editable />)
                : <><h4 className="col-12 text-center my-5"> You have no chirps ): </h4>
                    <Link to="/chirp/add" className="btn btn-primary mx-auto">Add a chirp?</Link></>
            }
        </section>
    )
}

export default withRouter(MyChirpsPage)
