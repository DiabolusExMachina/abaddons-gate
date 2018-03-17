import React, { Component } from 'react';
import Configurator from './Configurator';
import GateContainer from './GateContainer';
import Favorites from './../data/Favorites.json';
import Settings from './../data/Settings.json';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gates: Favorites,
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
          self={{ gates: this.state.gates }}
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
    if (gate && gate.gates) {
      this.setState({
        parent: parent,
        gates: gate.gates
      })
    }
  }

  changeSettings = (settings) => {
    this.setState({ settings })
  }
}
