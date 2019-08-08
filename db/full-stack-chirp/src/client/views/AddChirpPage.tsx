import React, { useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router'

import fakeAxios from '../utils/fakeAxios'
import { CHIRPS_API } from '../utils/consts'

import Form from '../components/Form'
import FormField from '../components/FormField'

interface AddChirpPageProps extends RouteComponentProps {
    userid: number,
}

const AddChirpPage: React.FC<AddChirpPageProps> = ({ userid, history }) => {

    if (userid === -1) {
        history.replace('/login')
        return (<></>)
    }

    const [text, setText] = useState<string>('')
    const [location, setLocation] = useState<string>('')

    const submitChirp = () => {
        if (userid === null) {
            return alert('Failed to connect to server!')
        }
        fakeAxios(CHIRPS_API, 'POST', {
            userid,
            text,
            location: location === '' ? null : location,
        }).then(() => {
            history.push('/mychirps')
        })
    }

    return (
        <section className="my-5 d-flex justify-content-center">
            <Form submitText="Add Chirp" action={submitChirp}>
                <FormField state={[text, setText]} name="Chirp Text" type='textarea' />
                <FormField state={[location, setLocation]} name="Location" />
            </Form>
        </section>
    )
}

export default withRouter(AddChirpPage)
