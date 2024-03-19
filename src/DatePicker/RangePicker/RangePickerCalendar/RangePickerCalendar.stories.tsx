import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { sourceCodeFormatter } from "sb-utils/index";
import RangePickerCalendar from ".";

const meta = {
  title: "Example/Date Picker/RangePickerCalendar",
  component: RangePickerCalendar,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("RangePickerCalendar"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onSelect: { action: "onChange" },
  },
} satisfies Meta<typeof RangePickerCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    let formattedProps = {};
    if (args?.currentDate) {
      formattedProps = {
        ...formattedProps,
        currentDate: new Date(args?.currentDate),
      };
    }
    if (args?.value && Array.isArray(args?.value)) {
      const nextValue = args?.value.map((date: any) => new Date(date));
      formattedProps = {
        ...formattedProps,
        value: nextValue,
      };
    }
    return <RangePickerCalendar {...args} {...formattedProps} />;
  },
  args: {
    ...RangePickerCalendar.defaultProps,
    disableFuture: false,
    disableCurrent: false,
    disablePast: false,
    currentDate: new Date(),
    numberOfMonths: 2,
    onSelect: fn(),
  },
};
