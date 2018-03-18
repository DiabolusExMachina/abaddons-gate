import React, { Component } from 'react';
import Gate from './Gate';
import Navigator from './Navigator';
import dragula from 'react-dragula';
import 'dragula/dist/dragula.css';

export default class GateContainer extends Component {

  render() {
    const gates = this.props.self.gates.map(gate => {
      if (gate.gates) {
        return <GateContainer
          key={gate.name}
          settings={this.props.settings}
          parent={this.props.self}
          self={gate}
          openGate={this.props.openGate}
        />
      } else {
        return <Gate
          key={gate.url}
          name={gate.name}
          url={gate.url}
          settings={this.props.settings}
        />
      }
    })

    return this.props.root ?
      <div>
        <Navigator gate={this.props.self} navigateTo={this.onGateContainerClick} />  
        <div className="GatesRootContainer" ref={this.dragulaDecorator}>
          {gates}
        </div>
      </div >
      :
      <div className="Gate" style={this.props.settings}>
        Folder: {this.props.self.name}
        <div onClickCapture={e => this.onGateContainerClick(e, this.props.self, this.props.parent)} className="GatesContainer">
          {gates}
        </div>
      </div>
  }


  onGateContainerClick = (event, gate, parent) => {
    this.props.openGate(gate, parent);
    event.stopPropagation();
  }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {};
      dragula([componentBackingInstance], options);
    }
  };



}