import React, { Component } from 'react'
import FilmCard from './FilmCard'

const URL = 'https://ghibliapi.herokuapp.com/films'

export default class SingleFilm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            film: {},
        }
    }

    componentDidMount() {
        fetch(URL + '/' + this.props.match.params.filmId)
            .then(rawData => rawData.json())
            .then(film => {
                this.setState({
                    film,
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div className="col mt-4">
                <div className="row justify-content-center">
                    <FilmCard {...this.state.film} expand />
                </div>
            </div>
        )
    }
}
