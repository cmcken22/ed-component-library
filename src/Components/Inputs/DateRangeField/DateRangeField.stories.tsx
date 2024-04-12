import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import DateRangeField from ".";

const meta = {
  title: "Example/Inputs/DateRangeField",
  component: DateRangeField,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("DateRangeField"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof DateRangeField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...DateRangeField.defaultProps,
    label: "Date Range",
    helperText: "Helper text",
  },
};