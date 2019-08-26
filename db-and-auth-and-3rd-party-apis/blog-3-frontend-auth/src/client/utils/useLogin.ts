import * as React from 'react'
import Axios from 'axios'
import { Method } from 'axios'
import { LoginContext } from '../components/LoginContext'
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from './apis'

const useLogin = () => {

    const [user, setUser] = React.useContext(LoginContext)

    const logout = () => {
        setUser({ authorid: -1, token: undefined, role: undefined })
        localStorage.removeItem('user')
    }

    const loginLocal = async (email: string, password: string) => {
        try {
            let user = (await Axios.post<IToken>(LOGIN_ENDPOINT, { email, password })).data
            setUser(user)
            localStorage.setItem('user', JSON.stringify(user))
            return true
        } catch (err) {
            return false
        }
    }

    const register = async (name: string, email: string, password: string) => {
        try {
            let user = (await Axios.post<IToken>(REGISTER_ENDPOINT, { name, email, password })).data
            setUser(user)
            localStorage.setItem('user', JSON.stringify(user))
            return true
        } catch (err) {
            return false
        }
    }

    const loginFromCache = () => {
        let user: IToken = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setUser(user)
            return true
        } else {
            setUser({ authorid: -1, token: undefined, role: undefined })
            return false
        }
    }

    const json = async <T>(url: string, method: Method = 'GET', body?: {}, headers?: { [key: string]: any }): Promise<T> => {
        if (user && user.token) {
            headers = { ...(headers || {}), 'Authorization': `Bearer ${user.token}` }
        }
        let result: any = (await Axios.request({
            url,
            method,
            data: body,
            headers,
        })).data

        if (method === 'GET' && result) {
            return result
        }
    }

    return {
        user,
        setUser,
        logout,
        loginLocal,
        register,
        loginFromCache,
        json,
    }
}

export default useLogin