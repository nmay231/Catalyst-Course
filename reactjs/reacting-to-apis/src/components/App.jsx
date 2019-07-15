import React, { Component } from 'react'
import FilmCard from './FilmCard'

class App extends Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <>
                <p>Main App</p>
                <FilmCard />
            </>
        )
    }
}

export default App