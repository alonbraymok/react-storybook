import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./button";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

// You can see this as "folders" in Storybook's sidebar
const stories = storiesOf("Alon/Button", module);

stories.addDecorator(withKnobs);
const variantOptions = {
  none: "",
  primary: "primary",
  secondary: "secondary",
};

stories.add("with knobs", () => (
  <Button
    onClick={action("clicked!")}
    // syntax is (name, options, default)
    variant={select("variant", variantOptions, "")}
    // syntax is (name, default)
    disabled={boolean("disabled", false)}
  >
    Button
  </Button>
));

// Every story represents a state for our Button component
stories.add("default", () => (
  <Button onClick={action("clicked!")}>Button</Button>
));
stories.add("default disabled", () => (
  <Button onClick={action("clicked!")} disabled>
    Button
  </Button>
));
stories.add("primary", () => (
  <Button onClick={action("clicked!")} variant="primary">
    Button
  </Button>
));
// Passing a prop without a value is basically the same as passing `true`
stories.add("primary disabled", () => (
  <Button onClick={action("clicked!")} variant="primary" disabled>
    Button
  </Button>
));
stories.add("secondary", () => (
  <Button onClick={action("clicked!")} variant="secondary">
    Button
  </Button>
));
stories.add("secondary disabled", () => (
  <Button onClick={action("clicked!")} variant="secondary" disabled>
    Button
  </Button>
));
