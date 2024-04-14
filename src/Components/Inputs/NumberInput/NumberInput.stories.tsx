import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import NumberInput from ".";

const meta = {
  title: "Example/Inputs/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("NumberInput"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...NumberInput.defaultProps,
    label: "Number Input",
    placeholder: "Please enter a number",
    helperText: "Helper text",
    tooltip: "This is a tooltip",
  },
};
