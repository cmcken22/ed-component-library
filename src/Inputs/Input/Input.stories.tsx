import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import Input from ".";

const meta = {
  title: "Example/Inputs/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Input"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      action: "changed",
    },
    status: {
      options: ["error", "success", "warning"],
      control: { type: "radio" },
    },
    labelPosition: {
      options: ["top", "left"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    id: "Primary",
    label: "Primary",
    placeholder: "Enter a value",
    disabled: false,
    helperText: "Helper Text",
    required: false,
    value: "Hello world",
    fullWidth: false,
    labelPosition: "top",
    tooltip: "Tooltip",
  },
};

export const Success: Story = {
  args: {
    ...Text.args,
    status: "success",
  },
};
export const Warning: Story = {
  args: {
    ...Text.args,
    status: "warning",
  },
};
export const Error: Story = {
  args: {
    ...Text.args,
    status: "error",
  },
};
export const LeftLabel: Story = {
  args: {
    ...Text.args,
    labelPosition: "left",
  },
};
