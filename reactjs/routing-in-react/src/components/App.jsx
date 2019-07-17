import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap'
import FilmPage from './FilmPage'
import SingleFilm from './SingleFilm'
import VehiclePage from './VehiclePage'
import SingleVehicle from './SingleVehicle'
import logo from '../assets/logo.png'


const App = () => {
    return (
        <Router>
            <>
                <header>
                    <Navbar color="dark" dark expand="md">
                        <NavbarBrand />
                        <Nav>
                            <NavItem><Link to="/" className="mx-2">
                                <Button color="dark"> Home </Button>
                            </Link></NavItem>
                            <NavItem><Link to="/films" className="mx-2">
                                <Button color="dark"> Films </Button>
                            </Link></NavItem>
                            <NavItem><Link to="/vehicles" className="mx-2">
                                <Button color="dark"> Vehicles </Button>
                            </Link></NavItem>
                        </Nav>
                    </Navbar>
                </header>
                <main className="container">
                    <figure className="row flex-column align-items-center mt-3">
                        <img src={logo} alt="Failed" />
                        <figcaption className="mt-2">Data provided curtesy of Studio Ghibli</figcaption>
                    </figure>
                    <section className="row justify-content-center">
                        <Switch>
                            <Route exact path="/"
                                component={() => <h1>Select one of the options from the navbar</h1>} />
                            <Route exact path="/films" component={FilmPage} />
                            <Route path="/films/:filmId" component={SingleFilm} />
                            <Route exact path="/vehicles" component={VehiclePage} />
                            <Route path="/vehicles/:vehicleId" component={SingleVehicle} />
                        </Switch>
                    </section>
                </main>
            </>
        </Router>
    )
}

export default App
