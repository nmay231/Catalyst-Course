import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

interface LogoutPageProps extends RouteComponentProps {
    setUserid: (userid: number) => void,
}

const LogoutPage: React.SFC<LogoutPageProps> = ({ setUserid, history }) => {

    localStorage.setItem('userid', '-1')
    setUserid(-1)
    history.replace('/')

    return (
        <></>
    )
}

export default withRouter(LogoutPage)
