import type { Meta, StoryObj } from "@storybook/react";
import commonArgTypes from "sb-utils/commonArgTypes";
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
    ...commonArgTypes.onChange,
    ...commonArgTypes.status,
  },
} satisfies Meta<typeof DateRangeField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...DateRangeField.defaultProps,
    label: "Date Range",
    helperText: "Helper text",
    disabled: false,
  },
};

const currDate = new Date("05-21-2024");
const nextWeek = new Date("05-21-2024");
nextWeek.setDate(nextWeek.getDate() + 1 * 7);

export const AllowClear: Story = {
  args: {
    ...Default.args,
    value: [currDate, nextWeek],
    allowClear: true,
  },
};
