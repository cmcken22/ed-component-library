import type { Meta, StoryObj } from "@storybook/react";
import DatePicker from "./DatePicker";

const meta = {
  title: "Example/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      action: "changed",
    },
    value: {
      control: { type: "date" },
    },
    status: {
      options: ["error", "success", "warning"],
      control: { type: "radio" },
    },
    labelPosition: {
      options: ["top", "left"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  render: (args) => {
    let formattedProps = {};
    if (args?.currentDate) {
      formattedProps = {
        ...args,
        currentDate: new Date(args?.currentDate),
      };
    }
    if (args?.value) {
      formattedProps = {
        ...args,
        value: new Date(args?.value),
      };
    }
    return <DatePicker {...args} {...formattedProps} />;
  },
  args: {
    ...DatePicker.defaultProps,
    label: "Date Picker",
    helperText: "Helper Text",
  },
};
