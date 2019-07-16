import React from 'react'
import ChirpFeed from './components/ChirpFeed'
import Navigation from './components/Navigation'
import CreateChirp from './components/CreateChirp'

const App = () => {
    return (
        <>
            <header>
                <Navigation />
                <div className="row my-5 block-inline">
                    <h1 className="font-italic font-weight-bold border rounded p-4 shadow mx-auto">Welcome to chirper</h1>
                </div>
            </header>
            <main className="container">
                <CreateChirp />
                <ChirpFeed chirps={[{}]} />
            </main>
        </>
    );
}

export default App
