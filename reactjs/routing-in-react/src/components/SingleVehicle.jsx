import React, { Component } from 'react'
import VehicleCard from './VehicleCard'

const URL = 'https://ghibliapi.herokuapp.com/vehicles'

export default class SingleVehicle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vehicle: {},
        }
    }

    fetchPilot = async (url) => {
        let rawData = await fetch(url)
        let name = (await rawData.json()).name
        this.setState((currentState, props) => {
            currentState.vehicle['pilot'] = name
            return currentState
        })
    }

    fetchFilm = async (url) => {
        let rawData = await fetch(url)
        let title = (await rawData.json()).title
        this.setState((currentState, props) => {
            currentState.vehicle['films'] = title
            return currentState
        })
    }

    componentDidMount() {
        fetch(URL + '/' + this.props.match.params.vehicleId)
            .then(rawData => rawData.json())
            .then(vehicle => {
                this.fetchPilot(vehicle['pilot'])
                let film = vehicle['films']
                let filmId = film.split('/').slice(-1)[0]
                this.fetchFilm(film)
                this.setState({
                    vehicle: {
                        ...vehicle,
                        pilot: 'Loading...',
                        films: 'Loading...',
                        filmId,
                    },
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div className="col mt-4">
                <div className="row justify-content-center">
                    <VehicleCard {...this.state.vehicle} expand />
                </div>
            </div>
        )
    }
}
