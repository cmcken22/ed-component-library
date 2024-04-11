import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { sourceCodeFormatter } from "sb-utils/index";
import DatePickerCalendar from ".";

const meta = {
  title: "Example/Date Picker/DatePickerCalendar",
  component: DatePickerCalendar,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("DatePickerCalendar"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onSelect: { action: "onChange" },
    currentDate: {
      control: {
        type: "date",
      },
    },
    value: {
      control: {
        type: "date",
      },
    },
  },
  render: (args) => {
    let formattedProps = {};
    if (args?.currentDate) {
      formattedProps = {
        ...formattedProps,
        currentDate: new Date(args?.currentDate),
      };
    }
    if (args?.value) {
      formattedProps = {
        ...formattedProps,
        value: new Date(args?.value),
      };
    }
    return <DatePickerCalendar {...args} {...formattedProps} />;
  },
} satisfies Meta<typeof DatePickerCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...DatePickerCalendar.defaultProps,
    value: null,
    disableFuture: false,
    disableCurrent: false,
    disablePast: false,
    currentDate: new Date() as Date,
    numberOfMonths: 1,
    onSelect: fn(),
  },
};

export const WithTools: Story = {
  args: {
    ...Default.args,
    tools: true,
    previewSelection: true,
  },
};
