import * as React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import './scss/app'
import { ChirpsProvider } from './components/ChirpsContext'
import HomePage from './views/HomePage'
import ChirpPage from './views/ChirpPage'

const App: React.SFC<IAppProps> = () => {

    return (
        <Router>
            <ChirpsProvider>
                <main className="container">
                    <Route exact path='/' component={HomePage} />
                    <Route path='/chirp/:id/admin' component={ChirpPage} />
                    <Route path="/chirp/add" component={ChirpPage} />
                    <Redirect path="*" to="/" />
                </main>
            </ChirpsProvider>
        </Router>
    )
}

export default App

interface IAppProps { }