import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "src/utils";
import Checkbox from "./Checkbox";

const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Checkbox"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    ...Checkbox.defaultProps,
    checked: true,
    disabled: false,
    label: "Primary",
    labelPosition: "right",
  },
};

export const LabelPositionLeft: Story = {
  args: {
    ...Sample.args,
    labelPosition: "left",
  },
};
