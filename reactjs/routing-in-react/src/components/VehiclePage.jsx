import React, { Component } from 'react'
import VehicleCard from './VehicleCard'

const URL = 'https://ghibliapi.herokuapp.com/vehicles'

export default class VehiclePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vehicles: [],
        }
    }

    fetchPilot = async (index, url) => {
        let rawData = await fetch(url)
        let name = (await rawData.json()).name
        this.setState((currentState, props) => {
            currentState.vehicles[index]['pilot'] = name
            return currentState
        })
    }

    fetchFilm = async (index, url) => {
        let rawData = await fetch(url)
        let title = (await rawData.json()).title
        this.setState((currentState, props) => {
            currentState.vehicles[index]['films'] = title
            return currentState
        })
    }

    componentDidMount() {
        fetch(URL)
            .then(rawData => rawData.json())
            .then(vehicles => {
                for (let index in vehicles) {
                    this.fetchPilot(index, vehicles[index]['pilot'])
                    let film = vehicles[index]['films']
                    let filmId = film.split('/').slice(-1)[0]
                    this.fetchFilm(index, film)
                    vehicles[index] = {
                        ...vehicles[index],
                        pilot: 'Loading...',
                        films: 'Loading...',
                        filmId,
                    }
                }
                this.setState({
                    vehicles,
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    {this.state.vehicles.map(
                        vehicle => <VehicleCard key={vehicle.id} {...vehicle} />
                    )}
                </div>
            </div>
        )
    }
}
