import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import PercentFilter from ".";

const meta = {
  title: "Example/PercentFilter",
  component: PercentFilter,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("PercentFilter"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof PercentFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...PercentFilter.defaultProps,
    label: "Percent Filter",
    placeholder: "Select a percent",
    helperText: "Helper text",
  },
};
