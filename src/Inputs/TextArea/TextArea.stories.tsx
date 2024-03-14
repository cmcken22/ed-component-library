import type { Meta, StoryObj } from "@storybook/react";
import Input from "../Input";

const meta = {
  title: "Example/Inputs/TextArea",
  component: Input.TextArea,
  parameters: {
    layout: "centered",
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
} satisfies Meta<typeof Input.TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextArea: Story = {
  args: {
    ...Input.TextArea.defaultProps,
    id: "Primary",
    label: "Primary",
    placeholder: "Enter a value",
    disabled: false,
    helperText: "Helper Text",
    required: false,
    value: "Hello world",
    fullWidth: false,
    labelPosition: "top",
  },
};
