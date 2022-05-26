import { Button } from "../components/Button";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "button",
  value: "Button",
};

export const Submit = Template.bind({});
Submit.args = {
  type: "submit",
  value: "Submit",
};

export const Reset = Template.bind({});
Reset.args = {
  type: "reset",
  value: "Reset",
};
