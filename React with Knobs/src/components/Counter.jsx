////////////////////////////////////////////////////////////////////
////////////////////// Challenge ///////////////////////////////////
////////////////////////////////////////////////////////////////////
//
// Add a knob to our story that lets us decide how much to
// add to our 'initialNumber', so that inside Storybook we can add
// any amount, such as 5, 2, 4, 211 without editing our component directly
//
////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import "./styles.sass";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialText: props.initialText,
      initialNumber: props.initialNumber
    };
  }

  handleIncrement = initialNumber => {
    Number(initialNumber)
      ? this.setState({
          initialNumber: Number(initialNumber) + 1
        })
      : this.setState({ initialNumber: 1 });
  };

  // You won't need to edit this function for the challenge
  // But it does need to be here
  // Don't delete it!
  componentWillReceiveProps(newProps) {
    for (const key in this.state)
      if (newProps[key] !== this.state[key])
        this.setState({
          [key]: newProps[key]
        });
  }

  render() {
    const { initialText, initialNumber } = this.state;
    return (
      <div>
        <span>{initialNumber}</span>
        <button
          onClick={() => {
            this.handleIncrement(initialNumber);
          }}
        >
          {initialText}
        </button>
      </div>
    );
  }
}

export default Counter;
