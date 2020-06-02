import React from "react";
import { storiesOf } from "@storybook/react";
import AntdModal from "./modal";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

const stories = storiesOf("Alon/Modal", module);

stories.addDecorator(withKnobs);

stories.add("with knobs modal", () => (
  <AntdModal centered={boolean("centered", false)} />
));

stories.add("default", () => <AntdModal onClick={action("clicked!")} />);
