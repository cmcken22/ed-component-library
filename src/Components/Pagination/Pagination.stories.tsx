import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import Pagination from ".";

const meta = {
  title: "Example/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Pagination"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      action: "onChange",
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...Pagination.defaultProps,
    count: 10,
    page: 4,
    siblingCount: 1,
    startBoundaryCount: 2,
    endBoundaryCount: 1,
  },
};
