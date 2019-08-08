import React, { useState, useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router'

import fakeAxios from '../utils/fakeAxios'
import { CHIRPS_API, IChirp } from '../utils/consts'

import Form from '../components/Form'
import FormField from '../components/FormField'

interface EditChirpPageProps extends RouteComponentProps<{ chirpid: string }> {
    userid: number,
}

const EditChirpPage: React.FC<EditChirpPageProps> = ({ userid, history, match }) => {

    if (userid === -1) {
        history.replace('/login')
    }

    const [text, setText] = useState<string>('')
    const [location, setLocation] = useState<string>('')

    useEffect(() => {
        (async () => {
            let chirp: IChirp = await fakeAxios(CHIRPS_API + `/${match.params.chirpid}`)
            setText(chirp.text)
            setLocation(chirp.location || '')
        })()
    }, [match.params.chirpid])

    const submitChirp = () => {
        fakeAxios(CHIRPS_API + `/${match.params.chirpid}`, 'PUT', {
            id: match.params.chirpid,
            userid,
            text,
            location,
        }).then(() => history.push('/mychirps'))
    }

    return (
        <section className="my-5 d-flex justify-content-center">
            <Form submitText="Edit" action={submitChirp}>
                <FormField state={[text, setText]} name="Chirp Text" type='textarea' />
                <FormField state={[location, setLocation]} name="Location" />
            </Form>
        </section>
    )
}

export default withRouter(EditChirpPage)
