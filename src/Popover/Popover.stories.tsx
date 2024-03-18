
import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "src/utils";
import Popover from "./";

const meta = {
  title: "Example/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Popover"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
