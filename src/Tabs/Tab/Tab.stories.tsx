
import type { Meta, StoryObj } from "@storybook/react";
 import { sourceCodeFormatter } from "sb-utils/index";
import Tab from "./";

const meta = {
  title: "Example/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Tab"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...Tab.defaultProps,
  },
};
