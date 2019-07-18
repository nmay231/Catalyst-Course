import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { NavBar, NavItem, NavLink } from 'reactstrap'

import HomePage from './routes/HomePage'
import AlbumPage from './routes/AlbumPage'

const App = () => {
    return (
        <Router>
            <NavBar color="secondary">
                <NavItem>
                    <Link to="/"><NavLink>Home</NavLink></Link>
                </NavItem>
            </NavBar>
            <main className="container">
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/:id/details" component={AlbumPage}></Route>
                </Switch>
            </main>
        </Router>
    )
}

export default App
