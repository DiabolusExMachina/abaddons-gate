import React, { Component } from 'react';
import Gate from './Gate';

import dragula from 'react-dragula';
import 'dragula/dist/dragula.css';

export default class GateContainer extends Component {

  constructor(props) {
    super(props)
    this.gateCount = 0;
  }

  render() {
    const gates = this.props.gates.map(gate => {
      if (gate.url) {
        return <Gate
          key={gate.id}
          name={gate.name}
          url={gate.url}
          settings={this.props.settings} />
      } else {
        return <GateContainer
          parent={this}
          settings={this.props.settings}
          name={gate.name}
          gates={gate.gates} />
      }
    })

    const contentView =
      <div className="Gate" style={this.props.settings}>
        Folder: {this.props.name}
      </div>;

    const folderView = [
      <div className="GatesContainer" ref={this.dragulaDecorator}>
        {gates}
      </div>,
    ];


    return this.props.parent ? contentView : folderView;
  }




  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {};
      dragula([componentBackingInstance], options);
    }
  };




}