import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "src/utils";
import DatePicker from "./DatePicker";

const meta = {
  title: "Example/Date Picker/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("DatePicker"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      action: "onChange",
    },
    onValidation: {
      action: "onValidation",
    },
    value: {
      control: { type: "date" },
    },
    calendarPlacement: {
      options: [
        "auto-end",
        "auto-start",
        "auto",
        "bottom-end",
        "bottom-start",
        "bottom",
        "left-end",
        "left-start",
        "left",
        "right-end",
        "right-start",
        "right",
        "top-end",
        "top-start",
        "top",
      ],
      control: { type: "select" },
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
    return <DatePicker {...args} {...formattedProps} />;
  },
  args: {
    ...DatePicker.defaultProps,
    id: "date-picker",
    label: "Date Picker",
    helperText: "Helper Text",
    placeholder: "Please enter date",
    popoverProps: {
      arrow: false,
      offset: [0, 8],
    },
  },
};
