import React, { Component } from 'react';

export default class Navigator extends Component {


    render() {
        let buttons = [];
        let gate = this.props.gate;
        while (gate.parent) {
            console.log("testr")
            buttons.unshift(
                <NavButton gate={gate.parent}
                    navigateTo={this.props.navigateTo} />
            );
            gate = gate.parent;
        }
        return buttons.length > 0 ?
            buttons
            :
            <button style={{ visibility: "hidden" }}> asdasd</button>;
    }

}

const NavButton = (props) => {
    return <button
        key={props.gate.name}
        onClick={e => props.navigateTo(e, props.gate, props.gate.parent)}>
        {props.gate.name}
    </button>
}