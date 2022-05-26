import { CardComponent } from "../components/CardComponent";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "CardComponent",
  component: CardComponent,
  argTypes: {
    clickHandler: { action: "clicked" },
  },
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <CardComponent {...args} />
);

export const Uncompleted = Template.bind({});
Uncompleted.args = {
  title: "Card",
  durationInMins: 20,
  isCompleted: false,
};

export const Completed = Template.bind({});
Completed.args = {
  title: "Card",
  durationInMins: 20,
  isCompleted: true,
};
