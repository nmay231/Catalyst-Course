import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardText, CardFooter, CardTitle } from 'reactstrap'

import Emoji, { link } from './Emoji'
import EmojiReaction from './EmojiReaction'

const FilmCard = props => {
    let producer_director
    if (props.producer === props.director) {
        producer_director = (
            <div className="col-12">
                Director and producer: <i id={'director-' + props.id}>{props.director}. </i>
                {/* For the sake of consistency */}
                <i id={'producer-' + props.id} style={{ display: 'none' }}>{props.producer}</i>
            </div>
        )
    } else {
        producer_director = (<>
            <div className="col-12">
                Director: <i id={'director-' + props.id}>{props.director}.</i>
            </div>
            <div className="col-12">
                Producer: <i id={'producer-' + props.id}>{props.producer}. </i>
            </div>
        </>)
    }

    let width = props.expand ? 'col-lg-6' : 'col-xl-4 col-lg-6'

    return (
        <article className={width}>
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle>
                        <h4>
                            <span id={'title-' + props.id}>{props.title}</span>
                            <Link to={'/films/' + props.id}><Emoji icon={link} /></Link>
                        </h4>
                    </CardTitle>
                    <small id={'rt-score-' + props.id}>
                        Rated {props.rt_score} on Rotten Tomatoes
                        </small>
                </CardHeader>
                <CardBody>
                    <CardText id={'description-' + props.id}>
                        {props.description}
                    </CardText>
                    <hr />
                    <div className="row">
                        {producer_director}
                    </div>
                </CardBody>
                <CardFooter className="d-flex align-items-center">
                    Release Date: <i id={'release-date-' + props.id}
                        className="mr-auto">
                        {props.release_date}
                    </i>
                    <EmojiReaction />
                </CardFooter>
            </Card>
        </article>
    )
}

export default FilmCard
