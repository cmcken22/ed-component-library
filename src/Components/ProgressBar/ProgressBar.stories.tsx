import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import ProgressBar from "./";

const meta = {
  title: "Example/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("ProgressBar"),
      },
    },
  },
  tags: ["autodocs"],
  render: (args) => {
    return (
      <Box
        sx={{
          minWidth: "200px",
        }}
      >
        <ProgressBar {...args} />
      </Box>
    );
  },
  argTypes: {
    status: {
      options: [undefined, "success", "error"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...ProgressBar.defaultProps,
    leftText: "100kb / 250kb",
    rightText: "1 second left",
    value: (100 / 250) * 100,
  },
};

export const Indeterminate: Story = {
  args: {
    ...Default.args,
    value: undefined,
  },
};

export const ErrorState: Story = {
  args: {
    ...Default.args,
    status: "error",
    errorMessage: "Upload failed",
  },
};

export const CustomColor: Story = {
  args: {
    ...Default.args,
    railColor: "#C3FF93",
    color: "#FF70AB",
  },
};
