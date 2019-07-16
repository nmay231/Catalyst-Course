import React from 'react'

const Navigation = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button href="#" className="navbar-brand btn btn-link">Legitimate Company, LLC</button>
            <button className="navbar-item btn btn-link text-decoration-none">Go Nowhere</button>
            <button className="navbar-item btn btn-link text-decoration-none">Do Nothing</button>
            <button className="navbar-item btn btn-link text-decoration-none"
                onClick={() => alert('Not so fake after all 😉')}>Fake Easter Egg</button>
        </nav>
    )
}

export default Navigation