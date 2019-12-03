import React from "react";
import { withKnobs, number, text } from "@storybook/addon-knobs";

import CounterFunction from "./counter-function";

// This story is written in "Component Story Format" that was introduced in Storybook 5.2
// https://storybook.js.org/docs/formats/component-story-format/
export default {
  title: "Counter (Function)",
  parameters: {
    component: CounterFunction,
    decorators: [withKnobs],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    "in-dsm": {
      id: "5cf53658fbb8682a3246d907",
      versionFilePath: "../components/versionFile.json"
    }
  }
};

export const simpleCounter = () => (
  <CounterFunction
    initialText={text("TEXT", "Text")}
    initialNumber={number("Initial Number", 30)}
  ></CounterFunction>
);

simpleCounter.story = {
  name: "Simple Counter",
  parameters: {
    // Story-Level 'in-dsm' configuration (Will apply only to the story that is being configured)
    // Story-Level configuration will override Module-Level 'in-dsm' configuration for the specific story
    // 'in-dsm': { id: '5d81da1f794992009993e356', versionFilePath: './versionFile.json' },
  }
};
