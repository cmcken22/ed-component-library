import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import OperandFilter from ".";

const meta = {
  title: "Example/OperandFilter/OperandFilter",
  component: OperandFilter,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("OperandFilter"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof OperandFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...OperandFilter.defaultProps,
    label: "Operand Filter",
    placeholder: "Select a percent",
    helperText: "Helper text",
    filterLabel: "Operand Filter",
  },
};
