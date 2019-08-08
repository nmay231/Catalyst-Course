import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import './scss/app'
import HomePage from './views/HomePage'
import MyChirpsPage from './views/MyChirpsPage'
import LoginPage from './views/LoginPage'
import LogoutPage from './views/LogoutPage'
import AddChirpPage from './views/AddChirpPage'
import EditChirpPage from './views/EditChirpPage'

interface IAppProps { }

const App: React.SFC<IAppProps> = () => {

    const [userid, setUserid] = useState<number | null>(null)

    useEffect(() => {
        let id: number = parseInt(localStorage.getItem('userid'))
        if (id && userid === null) {
            setUserid(id)
        } else if (id === null) {
            setUserid(-1) // Set to guest on first run
            localStorage.setItem('userid', '-1')
        } else {
            localStorage.setItem('userid', JSON.stringify(userid))
        }
    }, [userid])

    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink exact to="/" className="btn btn-dark mx-2"> Home </NavLink>
                <NavLink to="/mychirps" className="btn btn-dark mx-2"> My Timeline </NavLink>
                <NavLink to="/login" className="btn btn-dark mx-2"> Login </NavLink>
                <NavLink to="/chirp/add" className="btn btn-dark mx-2"> Add Chirp </NavLink>
                <NavLink to="/logout" className="btn btn-dark mx-2"> Logout </NavLink>
            </nav>
            <main className="container">
                <Route exact path="/" component={() => (<HomePage userid={userid} />)} />
                <Route path="/mychirps" component={() => (<MyChirpsPage userid={userid} />)} />
                <Route path="/login" component={() => (<LoginPage setUserid={setUserid} />)} />
                <Route path="/logout" component={() => (<LogoutPage setUserid={setUserid} />)} />
                <Route path="/chirp/add" component={() => (<AddChirpPage userid={userid} />)} />
                <Route path="/chirp/edit/:chirpid" component={() => (<EditChirpPage userid={userid} />)} />
            </main>
        </Router>
    )
}

export default App