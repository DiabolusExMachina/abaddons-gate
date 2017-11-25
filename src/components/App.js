import React, { Component } from 'react';
import Gate from './Gate';
import Settings from './Settings';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.addGate = this.addGate.bind(this);
    this.changeSettings = this.changeSettings.bind(this);
    this.gateCount = 0;
    this.state = {
      gates: [],
      settings: {
        width: 175,
        height: 100,
      },
    };
  }


  render() {
    const gates = this.state.gates.map(gate => <Gate
      key={gate.id}
      url={gate.url}
      settings={this.state.settings} />)

    return (
      <div className="App">
        <Settings
          addGate={this.addGate}
          settings={this.state.settings}
          changeSettings={this.changeSettings} />
        <div className="GatesContainer">
          {gates}
        </div>
      </div>
    );
  }

  addGate(gate) {
    if (gate && gate.url) {
      const gates = this.state.gates.slice();
      gate.id = this.gateCount;
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