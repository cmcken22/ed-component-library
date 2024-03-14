import type { Meta, StoryObj } from "@storybook/react";
import RadioButtonGroup from "./RadioButtonGroup";

const meta = {
  title: "Example/Radio Button Group",
  // @ts-expect-error
  component: RadioButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof RadioButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Sample: Story = {
  args: {
    ...RadioButtonGroup.defaultProps,
    options: [
      {
        label: "Option 1",
        value: "option_1",
        disabled: false,
      },
      {
        label: "Option 2",
        value: "option_2",
        disabled: false,
      },
      {
        label: "Option 3",
        value: "option_3",
        disabled: true,
      },
      {
        label: "Option 4",
        value: "option_4",
        disabled: false,
      },
    ],
    value: "",
    disabled: false,
    allowDeselect: false,
    labelPosition: "right",
  },
  // argTypes: {}
};
