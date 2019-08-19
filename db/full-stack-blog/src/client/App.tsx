import * as React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Axios from 'axios'

import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage'
import WriteBlogPage from './views/WriteBlogPage'
import ViewBlogPage from './views/ViewBlogPage'

import Navigation from './components/Navigation'
import { USERS_API, join } from './utils/apis'

const App: React.FC = () => {

    const [authorid, setAuthorid] = React.useState<number | null>(null)

    React.useEffect(() => {
        try {
            (async () => {
                let localid: string = localStorage.getItem('authorid')
                if (localid) {
                    let final = (await Axios.get<IAuthor>(join(USERS_API, localid))).data.id
                    setAuthorid(final)
                } else {
                    setAuthorid(-1)
                }
            })()
        } catch (err) {
            console.error(err)
        }
    }, [])

    React.useEffect(() => {
        if (authorid && authorid !== -1) {
            localStorage.setItem('authorid', authorid.toString())
        }
    }, [authorid])

    return (
        <Router>
            <Navigation />
            <div className="container">
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/login/as/luke" component={() => <LoginPage setAuthorid={setAuthorid} />} />
                    <Route path="/view/:blogid" component={ViewBlogPage} />
                    <Route path="/edit/:blogid" component={() => <WriteBlogPage authorid={authorid} />} />
                    <Route path="/writeblog" component={() => <WriteBlogPage authorid={authorid} />} />
                    <Redirect exact strict from="/" to="/home" />
                </Switch>
            </div>
        </Router>
    )
}

export default App
