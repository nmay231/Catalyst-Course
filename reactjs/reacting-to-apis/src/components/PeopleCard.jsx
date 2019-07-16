import React from 'react'

const PeopleCard = props => {
    return (
        <div className="col-xl-4 col-lg-6">
            <article className="card mb-4">
                <div className="card-header">
                    <h3 id={'name-' + props.id}>{props.name}</h3>
                    <small className="card-text" id={'age-' + props.id}>
                        Species: <span>{props.species}</span>
                    </small>
                </div>
                <div className="card-body">
                    <div className="card-text" id={'age-' + props.id}>
                        Age: <span>{props.age}</span>
                    </div>
                    <div className="card-text" id={'age-' + props.id}>
                        Gender: <span>{props.gender}</span>
                    </div>
                    <div className="card-text" id={'age-' + props.id}>
                        Link: <a href={props.url} target="_blank" rel="noopener noreferrer">the link</a>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default PeopleCard
