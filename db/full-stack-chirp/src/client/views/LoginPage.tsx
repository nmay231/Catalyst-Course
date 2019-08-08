import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { RouteComponentProps, withRouter } from 'react-router'

import { USERS_API } from '../utils/consts'
import fakeAxios from '../utils/fakeAxios'
import Form from '../components/Form'
import FormField from '../components/FormField'


interface LoginPageProps extends RouteComponentProps {
    setUserid: (userid: number) => void
}

const LoginPage: React.FC<LoginPageProps> = ({ setUserid, history }) => {

    let isNewUser = history.location.pathname === '/login/new'

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleLoginClick = () => {
        if (isNewUser) {
            if (password !== confirmPassword) {
                alert('The passwords must be the same!')
                alert('I should really setup a modal instead of ugly alerts....')
                return
            }
            fakeAxios(USERS_API, 'POST', {
                name: user,
                email,
                password,
            }).then(() => {
                return fakeAxios(USERS_API + '/login', 'GET', null, {
                    name: user,
                    password,
                })
            }).then((login: { valid: boolean, userid: number }) => {
                // login.valid should be true
                setUserid(login.userid)
                history.push('/')
            })
        } else {
            fakeAxios(USERS_API + '/login', 'GET', null, {
                name: user,
                password,
            }).then((login: { valid: boolean, userid: number }) => {
                if (login.valid) {
                    setUserid(login.userid)
                    history.push('/')
                } else {
                    alert('Invalid credentials!')
                }
            })
        }
    }

    const focusUser = () => {
        let input: HTMLInputElement = document.querySelector('input#User')
        input.focus()
    }

    let goBack: number
    if (history.location.state) {
        goBack = history.location.state.goBack
    } else {
        goBack = -1
    }

    const exit = () => {
        if (history.location.state) {
            history.go(history.location.state.goBack)
        } else {
            // You can add default action if user landed on route from external link
            history.push('/')
        }
    }

    return (
        <section className="row d-flex justify-content-center my-5">
            <div className="btn-group col-lg-4 my-3">
                <NavLink exact to={{ pathname: "/login", state: { goBack: goBack - 1 } }} className="btn btn-secondary"
                    onClick={focusUser}>Login Existing User</NavLink>
                <NavLink to={{ pathname: "/login/new", state: { goBack: goBack - 1 } }} className="btn btn-secondary"
                    onClick={focusUser}>Sign Up New User</NavLink>
                {/* <div className="btn btn-secondary"
                    onClick={() => { history.replace('/login'); focusUser() }}>Login Existing User</div>
                <div className="btn btn-secondary"
                    onClick={() => { history.replace('/login/new'); focusUser() }}>Sign Up New User</div> */}
            </div>
            <div className="col-12"></div>
            <Form submitText={isNewUser ? 'Sign Up' : 'Login'} action={handleLoginClick} cancel={exit}>
                <FormField state={[user, setUser]} name="User" transform={(s) => s.replace(' ', '-')} />
                {isNewUser
                    && <FormField state={[email, setEmail]} name="Email" type="text" />
                }
                <FormField state={[password, setPassword]} name="Password" type="password" />
                {isNewUser
                    && <FormField state={[confirmPassword, setConfirmPassword]} name="Confirm Password" type="password" />
                }
            </Form>
        </section>
    )
}

export default withRouter(LoginPage)
