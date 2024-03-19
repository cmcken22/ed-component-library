import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "src/utils";
import RadioButton from "./RadioButton";

const meta = {
  title: "Example/Radio Button",
  component: RadioButton,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("RadioButton"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    labelPosition: {
      options: ["right", "left"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Sample: Story = {
  args: {
    ...RadioButton.defaultProps,
    label: "Radio Button",
    value: "radio",
    checked: false,
    disabled: false,
    labelPosition: "right",
  },
};
export const LabelPositionLeft: Story = {
  args: {
    ...Sample.args,
    labelPosition: "left",
  },
};
