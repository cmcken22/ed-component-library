import type { Meta, StoryObj } from "@storybook/react";
import commonArgTypes from "sb-utils/commonArgTypes";
import { sourceCodeFormatter } from "sb-utils/index";
import { IconVariant } from "../Icon";
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
    ...commonArgTypes.onClick,
    ...commonArgTypes.onHover,
    type: {
      options: [
        "positive",
        "negative",
        "warning",
        "pending",
        "neutral",
        "primary",
        "secondary",
      ],
      control: { type: "radio" },
    },
    icon: {
      options: [undefined, ...Object.keys(IconVariant)],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    type: "positive",
    text: "Chip",
    hideIcon: false,
    iconPosition: "left",
    variant: "contained",
    onClick: undefined,
    onMouseDown: undefined,
  },
};

export const Outlined: Story = {
  args: {
    ...Sample.args,
    variant: "outlined",
  },
};

export const Primary: Story = {
  args: {
    ...Sample.args,
    type: "primary",
    allowClose: true,
  },
};

export const Secondary: Story = {
  args: {
    ...Sample.args,
    type: "secondary",
    allowClose: true,
  },
};
