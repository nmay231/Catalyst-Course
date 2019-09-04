import * as React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom'

import HomePage from './views/HomePage'
import MyTimelinePage from './views/MyTimelinePage'
import LoginPage from './views/LoginPage'
import WriteBlogPage from './views/WriteBlogPage'
import ViewBlogPage from './views/ViewBlogPage'
import _404Page from './views/_404Page'
import DonationPage from './views/DonationPage'

import { LoginProvider, LoginSubscriber } from './components/context/LoginContext'
import { AlertProvider, AlertContainer } from './components/context/AlertContext'
import Navigation from './components/Navigation'
import Bottom from './components/Bottom'

const App: React.FC = () => {

    return (
        <Router>
            <LoginProvider>
                <AlertProvider>
                    <LoginSubscriber />
                    <Navigation />
                    <main className="container">
                        <AlertContainer />
                        <Switch>
                            {/* General */}
                            <Route path="/home" component={HomePage} />
                            <Route path="/mytimeline" component={MyTimelinePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={() => <LoginPage registering />} />
                            {/* Blogs */}
                            <Route path="/view/:blogid" component={ViewBlogPage} />
                            <Route path="/edit/:blogid" component={WriteBlogPage} />
                            <Route path="/writeblog" component={WriteBlogPage} />
                            {/* All the Monies */}
                            <Route path="/donate" component={DonationPage} />
                            {/* Redirects */}
                            <Redirect exact from="/" to="/home" />
                            <Route path="/" component={_404Page} />
                        </Switch>
                        <Bottom>
                            <Link to="/donate" className="btn btn-info ml-auto rounded-pill mr-md-5 mb-md-5 mr-2 mb-3">Donate!</Link>
                        </Bottom>
                    </main>
                </AlertProvider>
            </LoginProvider>
        </Router>
    )
}

export default App
