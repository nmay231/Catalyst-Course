import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

import useLogin from '../utils/useLogin'
import Form from '../components/commons/Form'
import FormField from '../components/commons/FormField'

interface ILoginPage extends RouteComponentProps {
    registering?: boolean,
}

const LoginPage: React.FC<ILoginPage> = ({ history, registering }) => {

    const { loginLocal, register } = useLogin()

    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')


    const handleLogin = () => {
        if (!registering) {
            loginLocal(email, password)
                .then(success => {
                    if (success) {
                        history.push('/')
                    } else {
                        alert('You failed in life')
                    }
                })
        } else {
            if (password !== confirmPassword) {
                alert('You failed in life')
            }
            register(firstName + ' ' + lastName, email, password)
                .then(success => {
                    if (success) {
                        history.push('/writeblog')
                        // include alert
                    } else {
                        // alert failed registration
                    }
                })
        }
    }

    React.useEffect(() => {
        try {
            document.getElementById('FirstName').focus()
        } catch (err) {
            document.getElementById('Email').focus()
        }
    }, [])

    // const focusUser = () => {
    //     document.getElementById('Email').focus()
    // }

    // let goBack: number
    // if (location.state) {
    //     goBack = location.state.goBack
    // }

    return (
        <section className="row d-flex">
            <Form submitText={registering ? 'Register' : 'Login'} action={handleLogin} className="col-6 border rounded shadow-lg mt-5 mx-auto">
                {registering && <>
                    <FormField state={[firstName, setFirstName]} name="First Name" />
                    <FormField state={[lastName, setLastName]} name="Last Name" />
                    <hr />
                </>}
                <FormField state={[email, setEmail]} name="Email" />
                <FormField state={[password, setPassword]} name="Password" type="password" />
                {registering &&
                    <FormField state={[confirmPassword, setConfirmPassword]} name="Confirm Password" type="password" />
                }
            </Form>
        </section>
    )
}

export default withRouter(LoginPage)

// interface LoginPageProps extends RouteComponentProps {
//     setUserid: (userid: number) => void
// }

// const LoginPage2: React.FC<LoginPageProps> = ({ setUserid, history }) => {

//     let isNewUser = history.location.pathname === '/login/new'

//     const [user, setUser] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')

//     const handleLoginClick = () => {
//         if (isNewUser) {
//             if (password !== confirmPassword) {
//                 alert('The passwords must be the same!')
//                 alert('I should really setup a modal instead of ugly alerts....')
//                 return
//             }
//             fakeAxios(USERS_API, 'POST', {
//                 name: user,
//                 email,
//                 password,
//             }).then(() => {
//                 return fakeAxios(USERS_API + '/login', 'GET', null, {
//                     name: user,
//                     password,
//                 })
//             }).then((login: { valid: boolean, userid: number }) => {
//                 // login.valid should be true
//                 setUserid(login.userid)
//                 history.push('/')
//             })
//         } else {
//             fakeAxios(USERS_API + '/login', 'GET', null, {
//                 name: user,
//                 password,
//             }).then((login: { valid: boolean, userid: number }) => {
//                 if (login.valid) {
//                     setUserid(login.userid)
//                     history.push('/')
//                 } else {
//                     alert('Invalid credentials!')
//                 }
//             })
//         }
//     }

//     const focusUser = () => {
//         let input: HTMLInputElement = document.querySelector('input#User')
//         input.focus()
//     }

//     let goBack: number
//     if (history.location.state) {
//         goBack = history.location.state.goBack
//     } else {
//         goBack = -1
//     }

//     const exit = () => {
//         if (history.location.state) {
//             history.go(history.location.state.goBack)
//         } else {
//             // You can add default action if user landed on route from external link
//             history.push('/')
//         }
//     }

//     return (
//         <section className="row d-flex justify-content-center my-5">
//             <div className="btn-group col-lg-4 my-3">
//                 <NavLink exact to={{ pathname: "/login", state: { goBack: goBack - 1 } }} className="btn btn-secondary"
//                     onClick={focusUser}>Login Existing User</NavLink>
//                 <NavLink to={{ pathname: "/login/new", state: { goBack: goBack - 1 } }} className="btn btn-secondary"
//                     onClick={focusUser}>Sign Up New User</NavLink>
//                 {/* <div className="btn btn-secondary"
//                     onClick={() => { history.replace('/login'); focusUser() }}>Login Existing User</div>
//                 <div className="btn btn-secondary"
//                     onClick={() => { history.replace('/login/new'); focusUser() }}>Sign Up New User</div> */}
//             </div>
//             <div className="col-12"></div>
//             <Form submitText={isNewUser ? 'Sign Up' : 'Login'} action={handleLoginClick} cancel={exit}>
//                 <FormField state={[user, setUser]} name="User" transform={(s) => s.replace(' ', '-')} />
//                 {isNewUser
//                     && <FormField state={[email, setEmail]} name="Email" type="text" />
//                 }
//                 <FormField state={[password, setPassword]} name="Password" type="password" />
//                 {isNewUser
//                     && <FormField state={[confirmPassword, setConfirmPassword]} name="Confirm Password" type="password" />
//                 }
//             </Form>
//         </section>
//     )
// }