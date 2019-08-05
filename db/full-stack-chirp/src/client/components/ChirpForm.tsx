import React, { useState, useEffect, ChangeEvent, ChangeEventHandler, MouseEventHandler, MouseEvent } from 'react'
import { withRouter } from 'react-router-dom'


import { Chirp, chirpTemplate } from '../utils/consts'
import useChirpstore from '../utils/useChirpstore'
import { RouteComponentProps } from 'react-router'

const ChirpForm: React.FC<IChirpForm> = ({ chirp: { user, message }, history, id }) => {

    const [chirpUser, setChirpUser] = useState(user)
    const [chirpMessage, setChirpMessage] = useState(message)

    useEffect(() => {
        setChirpUser(user)
        setChirpMessage(message)
    }, [user, message])

    const { createChirp, updateChirp, deleteChirp } = useChirpstore()

    const handleSubmitClick: MouseEventHandler<HTMLButtonElement> = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        let userInput: HTMLInputElement = document.querySelector('input#chirpUser')
        let messageInput: HTMLInputElement = document.querySelector('input#chirpMessage')
        if (id === -1) { //New Chirp
            createChirp({
                user: userInput.value,
                message: messageInput.value,
            })
        } else {
            updateChirp(id, {
                user: userInput.value,
                message: messageInput.value,
            })
        }
        history.push('/')
    }
    const handleDeleteClick: MouseEventHandler<HTMLButtonElement> = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (confirm('Are you sure you want to delete this?')) {
            deleteChirp(id)
            history.goBack()
        }
    }

    const handleChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'chirpUser') {
            setChirpUser(e.target.value)
        } else if (e.target.id === 'chirpMessage') {
            setChirpMessage(e.target.value)
        }
    }

    return (
        <form className="mt-4 col-8 mx-auto border rounded shadow d-flex flex-column">
            <div className="form-group m-3">
                <label htmlFor="chirpUser" className="form-label">User</label>
                <input type="text" className="form-control" id="chirpUser" onChange={handleChange} value={chirpUser} />
            </div>
            <div className="form-group m-3">
                <label htmlFor="chirpMessage" className="form-label">Message</label>
                <input type="text" className="form-control" id="chirpMessage" onChange={handleChange} value={chirpMessage} />
            </div>
            <div className="btn-group mx-auto mb-3">
                <button
                    onClick={handleSubmitClick}
                    className="btn btn-primary">
                    {id > -1 ? 'Update' : 'Post'}
                </button>
                <button
                    onClick={handleDeleteClick}
                    className="btn btn-danger">Delete</button>
            </div>
        </form>
    )
}

interface IChirpForm extends RouteComponentProps {
    chirp: Chirp,
    id: number,
}

ChirpForm.defaultProps = {
    chirp: chirpTemplate,
    id: -1,
}

export default withRouter(ChirpForm)
