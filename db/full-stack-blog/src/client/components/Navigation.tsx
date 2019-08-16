import * as React from 'react'
import { NavLink } from 'react-router-dom'


const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark row">
            <NavLink to="/home" className="nav-item btn btn-dark my-1 mx-3"> Home </NavLink>
            <NavLink to="/login/as/luke" className="nav-item btn btn-dark my-1 mx-3"> Login </NavLink>
            <NavLink to="/writeblog" className="nav-item btn btn-dark my-1 mx-3"> New Blog </NavLink>
        </nav>
    )
}

export default Navigation
