import React, { Component } from 'react'

class CreateChirp extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            showForm: false,
            user: '',
            chirpContent: '',
        }
    }

    handleShowToggle = (e) => {
        this.setState({
            showForm: !this.state.showForm,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addChirp({
            user: this.state.user,
            chirpContent: this.state.chirpContent,
        })
        this.setState({
            chirpContent: '',
        })
        document.getElementById('chirp-content').focus()
    }

    handleChange = (e) => {
        if (e.target.id === 'chirp-user') {
            this.setState({
                user: e.target.value,
            })
        } else if (e.target.id === 'chirp-content') {
            this.setState({
                chirpContent: e.target.value,
            })
        }
    }

    render() {
        if (this.state.showForm) {
            return (<>
                <section className="row justify-content-center mb-4">
                    <button className="btn col-auto" onClick={this.handleShowToggle}
                        id="show-form">Hide Form</button>
                </section>
                <section className="row justify-content-center mb-4">
                    <form className="w-50 border rounded py-3 px-5">
                        <div className="form-group w-50">
                            <label htmlFor="chirp-user">UserName</label>
                            <input type="text" id="chirp-user" className="form-control"
                                onChange={this.handleChange} value={this.state.user} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="chirp-content">What's chirping?</label>
                            <textarea rows={10} id="chirp-content" className="form-control"
                                onChange={this.handleChange} value={this.state.chirpContent} />
                        </div>
                        <button type="submit" onClick={this.handleSubmit} className="btn btn-secondary">Chirp to the world</button>
                    </form>
                </section>
            </>)
        } else {
            return (
                <section className="row justify-content-center mb-4">
                    <button className="btn btn-secondary col-auto" onClick={this.handleShowToggle}
                        id="show-form">Show Chirp Form</button>
                </section>
            )
        }
    }
}

export default CreateChirp