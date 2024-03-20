import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import Tabs from "./";

const meta = {
  title: "Example/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Tabs"),
      },
    },
  },
  render: (args: any) => {
    return (
      <Box>
        <Tabs {...args}>
          <Tabs.Panel label="Tab 1">Tab 1 Content</Tabs.Panel>
          <Tabs.Panel label="Tab 2">Tab 2 Content</Tabs.Panel>
        </Tabs>
      </Box>
    );
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // ...Tabs.defaultProps,
  },
};
