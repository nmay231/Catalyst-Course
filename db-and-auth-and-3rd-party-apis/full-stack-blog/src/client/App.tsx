import * as React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import HomePage from './views/HomePage'
import MyTimelinePage from './views/MyTimelinePage'
import LoginPage from './views/LoginPage'
import WriteBlogPage from './views/WriteBlogPage'
import ViewBlogPage from './views/ViewBlogPage'
import _404Page from './views/_404Page'

import { LoginProvider, LoginSubscriber } from './components/context/LoginContext'
import { AlertProvider, AlertContainer } from './components/context/AlertContext'
import Navigation from './components/Navigation'

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
                            <Route path="/home" component={HomePage} />
                            <Route path="/mytimeline" component={MyTimelinePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={() => <LoginPage registering />} />
                            <Route path="/view/:blogid" component={ViewBlogPage} />
                            <Route path="/edit/:blogid" component={WriteBlogPage} />
                            <Route path="/writeblog" component={WriteBlogPage} />
                            <Redirect exact from="/" to="/home" />
                            <Route path="/" component={_404Page} />
                        </Switch>
                    </main>
                </AlertProvider>
            </LoginProvider>
        </Router>
    )
}

export default App
