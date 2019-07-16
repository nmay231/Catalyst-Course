import React, { Component } from 'react'
import ChirpFeed from './components/ChirpFeed'
import Navigation from './components/Navigation'
import CreateChirp from './components/CreateChirp'

// Either this or ChirpFeed needs to be a class with state containing all the chirps
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chirps: [],
        }
    }

    addChirp = chirp => {
        this.setState({
            chirps: [...this.state.chirps, chirp],
        })
        sessionStorage.setItem('chirps',
            JSON.stringify([...this.state.chirps, chirp])
        )
    }

    resetCache(e) {
        if (e.key === 'R' && e.ctrlKey) {
            sessionStorage.removeItem('chirps')
            alert('cache reset!')
        }
    }

    componentDidMount() {
        let chirps = sessionStorage.getItem('chirps')
        console.log(chirps)
        this.setState({
            chirps: JSON.parse(chirps) ||
                [
                    { user: 'person', chirpContent: 'YOLO!' },
                    { user: 'GANDALF', chirpContent: 'You shall not pass!' },
                    { user: 'do do bird', chirpContent: 'jalapeño' },
                ],
        })
        document.body.addEventListener('keydown', this.resetCache, false)
    }

    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.resetCache, false)
    }

    render() {
        return (
            <>
                <header>
                    <Navigation />
                    <div className="row my-5 block-inline">
                        <h1 className="font-italic font-weight-bold border rounded p-4 shadow mx-auto">Welcome to chirper</h1>
                    </div>
                </header>
                <main className="container">
                    <CreateChirp addChirp={this.addChirp} />
                    <ChirpFeed chirps={this.state.chirps} />
                </main>
            </>
        )
    }
}

export default App
