import React, { Component } from 'react';

export default class Gate extends Component {

    render() {
        const url = this.getUrl();
        return (
            <div className="Gate"
                style={this.props.settings}
                onClick={() => { window.open(url) }}>
                {this.props.url}
            </div>
        );
    }

    getUrl() {
        return this.props.url.startsWith("http://")
            || this.props.url.startsWith("https://")
            ? this.props.url
            : "https://" + this.props.url;

    }
}