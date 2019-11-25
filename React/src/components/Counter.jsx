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
    parseInt(initialNumber)
      ? this.setState({ initialNumber: initialNumber + 1 })
      : this.setState({ initialNumber: 1 });
  };

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
