import type { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Radio Button",
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  component: RadioButton,
  parameters: {
    layout: "centered",
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
