import React, { Component } from 'react'
import FilmCard from './components/FilmCard'
import PeopleCard from './components/PeopleCard';

const LOAD_NOTHING = 'nothing'
const LOAD_PEOPLE = 'people'
const LOAD_FILMS = 'films'

class App extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            films: [],
            people: [],
            load: LOAD_NOTHING,
        }
    }

    handleLoadClick = (e) => {
        // The data fetching would be better placed in componentDidMount()
        // but the assignment called for only one HTTP request at a time
        if (e.target.id === 'load-films') {
            this.setState({ load: LOAD_FILMS })
            if (this.state.films.length === 0) {
                fetch('https://ghibliapi.herokuapp.com/films')
                    .then(data => data.json())
                    .then(data => {
                        this.setState({
                            films: data,
                        })
                    })
                    .catch(err => console.error(err))
            }
        } else if (e.target.id === 'load-people') {
            this.setState({ load: LOAD_PEOPLE })
            if (this.state.people.length === 0) {
                fetch('https://ghibliapi.herokuapp.com/people')
                    .then(data => data.json())
                    .then(async data => {
                        for (let index in data) {
                            this.assignPersonSpecies(index, data[index].species)
                            data[index].species = 'Loading...'
                        }
                        this.setState({
                            people: data,
                        })
                    })
                    .catch(err => console.error(err))
            }
        } else {
            throw Error('You really did it this time')
        }
    }

    assignPersonSpecies = async (index, url) => {
        let speciesData = await fetch(url)
        let species = (await speciesData.json()).name
        this.setState((currentState, currentProps) => {
            currentState.people[index].species = species
            return currentState
        })
    }

    render() {
        let pageContent
        if (this.state.load === LOAD_NOTHING) {
            pageContent = <p>Click a button to load that content</p>
        } else if (this.state.load === LOAD_FILMS) {
            pageContent = this.state.films.map(
                (film) => (<FilmCard key={film.id} {...film} />)
            )
        } else if (this.state.load === LOAD_PEOPLE) {
            pageContent = this.state.people.map(
                (person) => (<PeopleCard key={person.id} {...person} />)
            )
        } else {
            throw Error('You failed in life')
        }
        return (
            <main className="container-fluid">
                <section className="row justify-content-center my-5">
                    <img src="logo.png" alt="Studio Ghibli Logo" />
                </section>
                <section className="row justify-content-center mb-4">
                    <button className="btn btn-primary mx-3" id="load-films"
                        onClick={this.handleLoadClick}>Load Films</button>
                    <button className="btn btn-primary mx-3" id="load-people"
                        onClick={this.handleLoadClick}>Load People</button>
                </section>
                <section className="row mx-5 justify-content-center">
                    {pageContent}
                </section>
            </main>
        )
    }
}

export default App