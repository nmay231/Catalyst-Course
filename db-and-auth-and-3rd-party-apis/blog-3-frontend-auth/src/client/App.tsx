import * as React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage'
import WriteBlogPage from './views/WriteBlogPage'
import ViewBlogPage from './views/ViewBlogPage'

import { LoginProvider, LoginSubscriber } from './components/LoginContext'
import Navigation from './components/Navigation'

const App: React.FC = () => {

    return (
        <Router>
            <LoginProvider>
                <LoginSubscriber />
                <Navigation />
                <main className="container">
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={() => <LoginPage registering />} />
                        <Route path="/view/:blogid" component={ViewBlogPage} />
                        <Route path="/edit/:blogid" component={WriteBlogPage} />
                        <Route path="/writeblog" component={WriteBlogPage} />
                        <Redirect from="/" to="/home" />
                    </Switch>
                </main>
            </LoginProvider>
        </Router>
    )
}

export default App
