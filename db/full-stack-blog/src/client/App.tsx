import * as React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import HomePage from './views/HomePage'
// import LoginPage from './views/LoginPage'
// import WriteBlog from './views/WriteBlogPage'
import ViewBlogPage from './views/ViewBlogPage'

import Navigation from './components/Navigation'

const App: React.FC = () => {
    return (
        <Router>
            <Navigation />
            <div className="container">
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    {/* <Route path="/login/as/luke" component={LoginPage} /> */}
                    <Route exact path="/view/:blogid" component={ViewBlogPage} />
                    {/* <Route path="/:blogid/edit" component={WriteBlog} /> */}
                    {/* <Route path="/writeblog" component={WriteBlog} /> */}
                    <Redirect exact strict from="/" to="/home" />
                </Switch>
            </div>
        </Router>
    )
}

export default App
