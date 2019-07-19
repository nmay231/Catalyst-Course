import React, { useState, useEffect } from 'react'
import axios from 'axios'

import UserAlbums from '../components/UserAlbums'
import { USERS_URL } from '../consts'


const HomePage = () => {
    let [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
            try {
                setUsers((await axios.get(USERS_URL)).data)
            } catch (err) {
                console.error(err)
            }
        })()
    }, [])

    return (
        <section className="row">
            {users.map(user => <UserAlbums key={user.id} user={user} expanded={!(user.id - 1)} />)}
        </section>
    )
}

export default HomePage
