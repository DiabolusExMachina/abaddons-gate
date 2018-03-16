import React, { Component } from 'react';
import Settings from './Settings';
import GateContainer from './GateContainer';

const gateSamples = [
  {
    name: "google",
    url: "https://google.de",
  },
  {
    name: "twitch",
    url: "https://twitch.com",
  },
  {
    name: "Nachrichten",
    gates: [
      {
        name: "Spiegel Online",
        url: "https://spiegel.de/",
      },
      {
        name: "Tagesschau",
        url: "https://taggeschau.de",
      }
    ]
  }

]

export default class App extends Component {

  constructor(props) {
    super(props);
    this.changeSettings = this.changeSettings.bind(this);
    this.addGate = this.addGate.bind(this);
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
      gates.push(gate)
      this.setState({ gates })
    } else {
      this.addGate({
        name: Math.random().toString(36).substring(7),
        url: Math.random().toString(36).substring(7)
      })
    }
  }

  changeSettings(settings) {
    this.setState({ settings })
  }
}
