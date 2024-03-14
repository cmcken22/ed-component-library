import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta = {
  title: "Example/Inputs/Input",
  component: Input,
  parameters: {
    layout: "centered",
    // docs: {
    //   source: {
    //     transform: (code: string) => {
    //       return code.replace(/<\(props\) => \{(?:[\s\S]*?)\}/, "<Avatar");
    //     },
    //   },
    // },
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
  },
};

export const Success: Story = {
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
    status: "success",
  },
};
export const Warning: Story = {
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
    status: "warning",
  },
};
export const Error: Story = {
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
    status: "error",
  },
};
export const LeftLabel: Story = {
  args: {
    id: "Primary",
    label: "Primary",
    placeholder: "Enter a value",
    disabled: false,
    helperText: "Helper Text",
    required: false,
    value: "Hello world",
    fullWidth: false,
    labelPosition: "left",
  },
};
