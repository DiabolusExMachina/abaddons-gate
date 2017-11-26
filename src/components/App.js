import React, { Component } from 'react';
import Settings from './Settings';
import GateContainer from './GateContainer';

const gateSamples = [
    {
        id: 1,
        name: "google",
        url: "https://google.de",
        order: 1,
    },
    {
        id: 4,
        name: "twitch",
        url: "https://twitch.com",
        order: 2,
    },
    {
        id: 2,
        name: "Nachrichten",
        order: 2,
        gates: [
            {
                id: 3,
                name: "Spiegel Online",
                url: "https://spiegel.de/",
                order: 1,
            },
            {
                id: 4,
                name: "Tagesschau",
                url: "https://taggeschau.de",
                order: 2,
            }
        ]
    }

]

export default class componentName extends Component {

    constructor(props) {
        super(props);
        this.changeSettings = this.changeSettings.bind(this);
        this.addGate = this.addGate.bind(this);
        this.gateId = 5;
        this.state = {
            gates: gateSamples,
            settings: {
                width: 175,
                height: 100,
            },
        }
    }

    render() {
        return (
            <div className="App"  >
                <Settings
                    addGate={this.addGate}
                    settings={this.state.settings}
                    changeSettings={this.changeSettings} />
                <GateContainer
                   
                    settings={this.state.settings}
                    gates={this.state.gates}
                    getGateId={this.getGateId} />
            </div>
        );
    }

    addGate(gate) {
        if (gate && gate.url) {
            const gates = this.state.gates.slice();
            this.gateId++;
            gate.id = this.gateId
            gate.count = this.gateId;
            gates.push(gate)
            this.setState({ gates })
        } else {
            this.addGate({
                url: Math.random().toString(36).substring(7)
            })
        }
        this.gateCount++;
    }

    changeSettings(settings) {
        this.setState({ settings })
    }
}
