import React, { useState } from "react";
import "./styles.sass";

const CounterFunction = ({ initialNumber, initialText }) => {
  let [currentNumber, handleIncrement] = useState(initialNumber);
  return (
    <div>
      <span>{currentNumber}</span>
      <button
        onClick={() => {
          handleIncrement(
            Number(currentNumber)
              ? (currentNumber = Number(currentNumber) + 1)
              : (currentNumber = 1)
          );
        }}
      >
        {initialText}
      </button>
    </div>
  );
};

export default CounterFunction;
