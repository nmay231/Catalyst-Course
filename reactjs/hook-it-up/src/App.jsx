import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'reactstrap'

import HomePage from './routes/HomePage'
import AlbumPage from './routes/AlbumPage'

const noselect = {
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'msUserSelect': 'none',
    'userSelect': 'none',
}

const App = () => {
    return (
        <Router>
            <Navbar color="dark">
                <Nav>
                    <NavItem>
                        <Link to="/" className="mx-5">Home</Link>
                    </NavItem>
                </Nav>
            </Navbar>
            <main className="container" style={noselect}>
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="/album/:id/details" component={AlbumPage}></Route>
                </Switch>
            </main>
        </Router>
    )
}

export default App
