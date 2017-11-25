import React, { Component } from 'react';

export default class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: ""
        }
        this.changeUrl = this.changeUrl.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onResize = this.onResize.bind(this);
    }

    render() {
        return (
            <div className="settings" align="right">
                <button name="+" onClick={this.onResize}>+</button>
                <button name="-" onClick={this.onResize}>-</button>
                |
                Url: <input type="text" name="url" value={this.state.url} onChange={this.changeUrl} />
                <button onClick={this.onAdd}>add</button>
            </div>
        );
    }

    onAdd(event) {
        this.props.addGate({
            url: this.state.url,
        });
    }

    onResize(event) {
        const settings = JSON.parse(JSON.stringify(this.props.settings));
        const resize = 25;
        if ("+" === event.target.name) {
            settings.width += resize;
            settings.height += resize;
        } else {
            settings.width -=  resize;
            settings.height -= resize;
        }
        this.props.changeSettings(settings)

    }

    changeUrl(event) {
        this.setState({ url: event.target.value });
    }
}