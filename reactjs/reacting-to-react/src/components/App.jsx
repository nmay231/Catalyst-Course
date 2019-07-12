import React, { Component } from 'react'

// let App = (props) => {
//     return (
//         <h1>{props.message}</h1>
//     )
// }

class App extends Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            text: props.message,
            inputValue: null,
            hasLoaded: false,
        }
    }

    componentDidMount() {
        this.setState({
            hasLoaded: true,
        })
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        })
    }

    handleLoadingClick = (e) => {
        this.setState({
            hasLoaded: !this.state.hasLoaded,
        })
    }

    render() {
        console.log(this.props)
        if (this.state.hasLoaded) {
            return (
                <>
                    <h1>{this.props.message} {this.state.text}</h1>
                    <input type="text" onChange={this.handleInputChange} placeholder="type here" />
                    <p>Input appears here: {this.state.inputValue}</p>
                    <button onClick={this.handleLoadingClick}>"Unload"</button>
                </>
            )
        } else {
            return (
                <>
                    <h1>Loading...</h1>
                    <button onClick={this.handleLoadingClick}>Click to magically load faster!</button>
                </>
            )
        }
    }
}

export default App