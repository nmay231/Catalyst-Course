import React from 'react'

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
    return (
        <div className="col-xl-4 col-lg-6">
            <article className="card mb-4">
                <div className="card-header">
                    <h3 id={'title-' + props.id}>{props.title}</h3>
                    <small id={'rt-score-' + props.id}>
                        Rated {props.rt_score} on Rotten Tomatoes
                        </small>
                </div>
                <div className="card-body">
                    <div className="card-text" id={'description-' + props.id}>
                        {props.description}
                    </div>
                    <hr />
                    <div className="row">
                        {producer_director}
                    </div>
                </div>
                <div className="card-footer">
                    Release Date: <i id={'release-date-' + props.id}>{props.release_date}</i>
                </div>
            </article>
        </div>
    )
}

export default FilmCard