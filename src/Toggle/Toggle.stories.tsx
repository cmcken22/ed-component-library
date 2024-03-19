import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import Toggle from "./Toggle";

const meta = {
  title: "Example/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Toggle"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    ...Toggle.defaultProps,
    displayToggleText: false,
    label: "Toggle Label",
  },
};

export const LabelPositionLeft: Story = {
  args: {
    ...Sample.args,
    labelPosition: "left",
  },
};
