
import type { Meta, StoryObj } from "@storybook/react";
 import { sourceCodeFormatter } from "sb-utils/index";
import RangeFilter from "./";

const meta = {
  title: "Example/RangeFilter",
  component: RangeFilter,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("RangeFilter"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof RangeFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...RangeFilter.defaultProps,
  },
};
