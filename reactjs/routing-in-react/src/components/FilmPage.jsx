import React, { Component } from 'react'
import FilmCard from './FilmCard';

const URL = 'https://ghibliapi.herokuapp.com/films'

export default class FilmPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
        }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            fetch(URL + '/' + this.props.match.params.id)
                .then(rawData => rawData.json())
                .then(film => {
                    this.setState({
                        films: [film],
                    })
                })
                .catch(err => console.error(err))
        } else {
            fetch(URL)
                .then(rawData => rawData.json())
                .then(films => {
                    this.setState({
                        films,
                    })
                })
                .catch(err => console.error(err))
        }
    }

    render() {
        return (
            <div className="col">
                <div className="row justify-content-center">
                    {this.state.films.map(
                        film => <FilmCard key={film.id} {...film} />
                    )}
                </div>
            </div>
        )
    }
}
