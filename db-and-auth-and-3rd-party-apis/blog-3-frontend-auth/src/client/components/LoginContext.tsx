import * as React from 'react'
import useLogin from '../utils/useLogin'

export const LoginContext = React.createContext<[IToken, React.Dispatch<React.SetStateAction<IToken>>]>(
    [{ authorid: null, token: undefined, role: 'guest' }, () => { console.log('yellow') }]
)

export const LoginProvider: React.FC = ({ children }) => {

    const [user, setUser] = React.useState<IToken>({ authorid: null, token: undefined, role: 'admin' })

    return (
        <LoginContext.Provider value={[user, setUser]}>
            {children}
        </LoginContext.Provider>
    )
}

export const LoginSubscriber: React.FC = () => {

    const { loginFromCache, user } = useLogin()

    React.useEffect(() => {
        try {
            loginFromCache()
        } catch (err) {
            console.error(err)
        }
    }, [])

    return <></>
}