import type { Meta, StoryObj } from "@storybook/react";
import Input from "../Input";

const meta = {
  title: "Example/Input/Currency",
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  component: Input.Currency,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    status: {
      options: ["error", "success", "warning"],
      control: { type: "radio" },
    },
    labelPosition: {
      options: ["top", "left"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Input.Currency>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
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
