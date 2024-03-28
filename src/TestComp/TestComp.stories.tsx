import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import TestComp from "./";

const meta = {
  title: "Example/TestComp",
  component: TestComp,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("TestComp"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TestComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Box
      sx={{
        width: "300px",
      }}
    >
      <TestComp {...args} />
    </Box>
  ),
  args: {
    ...TestComp.defaultProps,
    options: [
      {
        label: "Option 1",
        value: "option1",
      },
      {
        label: "Option 2",
        value: "option2",
      },
      {
        label: "Option 3",
        value: "option3",
      },
      {
        label: "Option 4",
        value: "option4",
      },
      {
        label: "Option 5",
        value: "option5",
      },
      {
        label: "Option 6",
        value: "option6",
      },
      {
        label: "Option 7",
        value: "option7",
      },
      {
        label: "Option 8",
        value: "option8",
      },
      {
        label: "Option 9",
        value: "option9",
      },
      {
        label: "Option 10",
        value: "option10",
      },
    ],
  },
};
