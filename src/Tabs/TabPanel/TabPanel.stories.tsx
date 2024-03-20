
import type { Meta, StoryObj } from "@storybook/react";
 import { sourceCodeFormatter } from "sb-utils/index";
import TabPanel from "./";

const meta = {
  title: "Example/TabPanel",
  component: TabPanel,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("TabPanel"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TabPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...TabPanel.defaultProps,
  },
};
