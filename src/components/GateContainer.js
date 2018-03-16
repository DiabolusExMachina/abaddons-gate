import React, { Component } from 'react';
import Gate from './Gate';

import dragula from 'react-dragula';
import 'dragula/dist/dragula.css';

export default class GateContainer extends Component {

  render() {
    const gates = this.props.gates.map(gate => {
      if (gate.gates) {
        return <GateContainer
          parent={this}
          settings={this.props.settings}
          name={gate.name}
          gates={gate.gates} />
      } else {
        return <Gate
          key={gate.url}
          name={gate.name}
          url={gate.url}
          settings={this.props.settings} />
      }
    })

    const contentView =
      <div className="Gate" style={this.props.settings}>
        Folder: {this.props.name}
        <div onClickCapture={e =>e.stopPropagation()} className="GatesContainer">
          {gates}
        </div>
      </div>;

    const folderView =
      <div className="GatesRootContainer" ref={this.dragulaDecorator}>
        {gates}
      </div>

    return this.props.parent ? contentView : folderView;
  }


  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {};
      dragula([componentBackingInstance], options);
    }
  };

}