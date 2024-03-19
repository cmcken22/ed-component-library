import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "src/utils";
import Chip from "./Chip";

const meta = {
  title: "Example/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Chip"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "onClick" },
    onHover: { action: "onHover" },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Smaple: Story = {
  args: {
    type: "positive",
    text: "Chip",
    hideIcon: false,
    iconPosition: "left",
  },
  argTypes: {
    type: {
      options: ["positive", "negative", "warning", "pending", "neutral"],
      control: { type: "radio" },
    },
  },
};
