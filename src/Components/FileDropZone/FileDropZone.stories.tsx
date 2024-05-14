import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import FileDropZone from "./";

const meta = {
  title: "Example/FileDropZone",
  component: FileDropZone,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("FileDropZone"),
      },
    },
  },
  tags: ["autodocs"],
  render: (args) => (
    <Box sx={{ width: "800px" }}>
      <FileDropZone {...args} />
    </Box>
  ),
  argTypes: {
    onDrop: {
      action: "onDrop",
    },
    onError: {
      action: "onError",
    },
  },
} satisfies Meta<typeof FileDropZone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...FileDropZone.defaultProps,
  },
};
