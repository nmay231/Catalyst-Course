import * as React from 'react';
import axios from 'axios'

import './scss/app';

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

        this.state = { name: null };
    }

    async componentWillMount() {
        // let test = await axios.get('/api/hello')
        // console.log(test.data)
        // this.setState({ name: test.data })
    }

    componentDidMount() {
        // let input = document.querySelector('')
    }

    render() {
        return (
            <main className="container">
                <h1 className="covalence-blue">Hello {this.state.name}!</h1>
                <div className="form-group">
                    <div className="form-control">
                        <input type="text" style={{ border: 'none', outline: 0, padding: 0, boxShadow: 'none', display: 'inline-block' }} autoFocus />
                    </div>
                    <input type="text" className="form-control" />
                </div>
                <h2></h2>
            </main>
        )
    }
}

interface IAppProps {

}

interface IAppState {
    name: string;
}