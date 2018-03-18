import React, { Component } from 'react';
import Configurator from './Configurator';
import GateContainer from './GateContainer';
import root from './../data/Favorites.json';
import Settings from './../data/Settings.json';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gate: root,
      settings: Settings
    }
  }

  render() {
    return (
      <div className="App"  >
        <Configurator
          addGate={this.addGate}
          settings={this.state.settings}
          changeSettings={this.changeSettings}
        />
        <GateContainer
          root={true}
          settings={this.state.settings}
          parent={this.state.parent}
          self={this.state.gate}
          openGate={this.openGate}
        />
      </div>
    );
  }

  addGate = (gate) => {
    if (gate && gate.url) {
      const gates = this.state.gates;
      gates.push(gate)
      this.setState({ gates })
    } else {
      this.addGate({
        name: Math.random().toString(36).substring(7),
        url: Math.random().toString(36).substring(7)
      })
    }
  }

  openGate = (gate, parent) => {
    gate.parent = parent;
    console.log("open gate", gate.name, "parent", parent ?  parent.name : "none")
    this.setState({
      parent: parent,
      gate: gate
    })
  }


  changeSettings = (settings) => {
    this.setState({ settings })
  }
}
