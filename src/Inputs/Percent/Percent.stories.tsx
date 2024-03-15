import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "src/utils";
import Input from "../Input";

const meta = {
  title: "Example/Inputs/Percent",
  component: Input.Percent,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Input.Percent"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      options: ["error", "success", "warning"],
      control: { type: "radio" },
    },
    labelPosition: {
      options: ["top", "left"],
      control: { type: "radio" },
    },
    thousandSeparator: {
      control: { type: "boolean" },
    },
    fixedDecimalScale: {
      control: { type: "boolean" },
    },
    decimalScale: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof Input.Percent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    ...Input.Percent.defaultProps,
    id: "Percent",
    label: "Percent",
    placeholder: "",
    disabled: false,
    helperText: "Helper Text",
    required: false,
    value: "100",
    fullWidth: false,
    labelPosition: "top",
  },
};
