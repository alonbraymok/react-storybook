import React from "react";
import { storiesOf } from "@storybook/react";
import AntdModal from "./modal";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

// You can see this as "folders" in Storybook's sidebar
const stories = storiesOf("Alon/Modal", module);

stories.addDecorator(withKnobs);

// Every story represents a state for our Button component
stories.add("default", () => <AntdModal onClick={action("clicked!")} />);
