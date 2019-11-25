import React from "react";
import { storiesOf } from "@storybook/react";

import Counter from "../components/Counter";

storiesOf("Counter", module).add(
  "Starts at 30",
  () => {
    return <Counter initialText="Increment" initialNumber="Thirty" />;
  },
  {
    "in-dsm": { id: "5c4eb8659b3358003a8b60ff", version: "1.0.0" }
  }
);
