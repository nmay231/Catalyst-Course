import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardText, CardFooter, CardTitle } from 'reactstrap'

import Emoji, { link } from './Emoji'
import EmojiReaction from './EmojiReaction'

const VehicleCard = props => {
    let width = props.expand ? 'col-lg-6' : 'col-xl-4 col-lg-6'
    return (
        <article className={width}>
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle>
                        <h4>
                            <span id={'name-' + props.id}>{props.name}</span>
                            <Link to={'/vehicles/' + props.id}><Emoji icon={link} /></Link>
                        </h4>
                    </CardTitle>
                    <small id={'vehicle-class-' + props.id}>
                        Vehicle type: {props.vehicle_class}
                    </small>
                </CardHeader>
                <CardBody>
                    <CardText id={'description-' + props.id}>
                        {props.description}
                    </CardText>
                    <hr />
                    <CardText>
                        Length: <span id={'length-' + props.id}>{props.length}</span>
                    </CardText>
                    <CardText>
                        Pilot: <span id={'pilot-' + props.id}>{props.pilot}</span>
                    </CardText>
                    <CardText>
                        Featured in film: <span id={'film-' + props.id}>{props.films}</span>
                        <Link to={'/films/' + props.filmId}><Emoji icon={link} /></Link>
                    </CardText>
                </CardBody>
                <CardFooter className="d-flex">
                    <span className="mr-auto"></span>
                    <EmojiReaction />
                </CardFooter>
            </Card>
        </article>
    )
}

export default VehicleCard
