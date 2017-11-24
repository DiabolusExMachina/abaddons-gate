import React, { Component } from 'react';
import Gate from './Gate';
import Controls from './Controls';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { gates: [] };
    this.addGate = this.addGate.bind(this);
  }


  render() {
    const gates = this.state.gates.map(gate => <Gate url={gate.url} />)
    return (
      <div className="App">
        <Controls addGate={this.addGate} />
        <div className="GatesContainer">
          {gates}
        </div>
      </div>
    );
  }

  addGate(gate) {
    if (gate && gate.url) {
      const gates = this.state.gates.slice();
      gates.push(gate)
      this.setState({ gates })
    }else{
      this.addGate({
        url : Math.random().toString(36).substring(7)
      })
    }

  }

}