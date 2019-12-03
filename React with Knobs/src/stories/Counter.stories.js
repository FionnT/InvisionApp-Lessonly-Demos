////////////////////////////////////////////////////////////////////
////////////////////// Challenge ///////////////////////////////////
////////////////////////////////////////////////////////////////////
//
// Add a knob to our story that lets us decide how much to
// add to our 'initialNumber', so that inside Storybook we can add
// any amount, such as 5, 2, 4, 211 without editing our component directly
//
////////////////////////////////////////////////////////////////////

import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number, text } from "@storybook/addon-knobs";

import Counter from "../components/Counter";

storiesOf("Counter", module)
  .addDecorator(withKnobs)
  .add(
    "Starts at 30",
    () => {
      return (
        <Counter
          initialText={text("Text", "TEXT")}
          initialNumber={number("Initial Number", 30)}
        />
      );
    },
    {
      "in-dsm": { id: "5c4eb8659b3358003a8b60ff", version: "1.0.0" }
    }
  );
