import React, { Component } from 'react'

import Emoji, { regStars, solidStars } from './Emoji'

export default class EmojiReaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activated: false,
        }
    }

    handleClick = (e) => {
        this.setState({
            activated: !this.state.activated,
        })
    }

    render() {
        if (this.state.activated) {
            return (<Emoji style={{ color: 'darkgreen' }} onClick={this.handleClick} icon={solidStars} />)
        } else {
            return (<Emoji onClick={this.handleClick} icon={regStars} />)
        }
    }
}
