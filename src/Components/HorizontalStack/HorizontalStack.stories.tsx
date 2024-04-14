
import type { Meta, StoryObj } from "@storybook/react";
 import { sourceCodeFormatter } from "sb-utils/index";
import HorizontalStack from "./";

const meta = {
  title: "Example/HorizontalStack",
  component: HorizontalStack,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("HorizontalStack"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof HorizontalStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...HorizontalStack.defaultProps,
  },
};
