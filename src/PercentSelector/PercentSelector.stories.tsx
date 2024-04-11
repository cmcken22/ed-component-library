import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import PercentSelector from "./";

const meta = {
  title: "Example/PercentSelector",
  component: PercentSelector,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("PercentSelector"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PercentSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...PercentSelector.defaultProps,
    label: "Percent Selector",
  },
};
