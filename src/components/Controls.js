import React, { Component } from 'react';

export default class Controls extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: null
        }
        this.changeUrl = this.changeUrl.bind(this);
        this.onclick = this.onclick.bind(this);
    }

    render() {
        return (
            <div>
                Url: <input type="text" name="url" value={this.state.url} onChange={this.changeUrl} />
                <button onClick={this.onclick}>add</button>
            </div>
        );
    }

    onclick(event) {
        this.props.addGate({
            url: this.state.url,
        });
    }

    changeUrl(event) {
        this.setState({ url: event.target.value });
    }
}