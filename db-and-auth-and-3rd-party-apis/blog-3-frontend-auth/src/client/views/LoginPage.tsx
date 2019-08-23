import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import Axios from 'axios';
import { AUTHORS_API, join } from '../utils/apis';

interface ILoginPage extends RouteComponentProps {
    setAuthorid: (...args: any[]) => any,
}

const LoginPage: React.FC<ILoginPage> = ({ setAuthorid, history }) => {

    const handleLogin: React.MouseEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        Axios.get(join(AUTHORS_API, 'find-luke-lolololol'))
            .then((res) => {
                setAuthorid(res.data.id)
                history.push('/')
            })
    }

    return (
        <section className="row d-flex">
            <h1 className="text-center col-12 my-3">Login as Luke!</h1>
            <h2 className="text-center col-12 my-3">He doesn't mind!</h2>
            <h3 className="text-center col-12 my-3">Who needs security anyways!</h3>
            <h4 className="text-center col-12 my-3">Besides, I'm only learning about authentication in the next section...</h4>
            <button role="button" onClick={handleLogin} className="btn btn-success mx-auto">Just log right on in!</button>
        </section>
    )
}

export default withRouter(LoginPage)