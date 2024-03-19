import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "src/utils";
import TextArea from "./TextArea";

const meta = {
  title: "Example/Inputs/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Input.TextArea"),
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
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    ...TextArea.defaultProps,
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

export const LeftLabel: Story = {
  args: {
    ...Sample.args,
    labelPosition: "left",
  },
};
