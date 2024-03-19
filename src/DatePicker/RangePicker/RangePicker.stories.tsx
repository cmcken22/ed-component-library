import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import RangePicker from "./RangePicker";

const meta = {
  title: "Example/Date Picker/RangePicker",
  component: RangePicker,
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        transform: sourceCodeFormatter("RangePicker"),
      },
    },
  },
  render: (args) => {
    let formattedProps = {};
    if (args?.currentDate) {
      formattedProps = {
        ...args,
        currentDate: new Date(args?.currentDate),
      };
    }
    if (args?.value) {
      const nextValue = args?.value.map((date: any) => new Date(date));
      formattedProps = {
        ...formattedProps,
        value: nextValue,
      };
    }
    return <RangePicker {...args} {...formattedProps} />;
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
      control: { type: "array" },
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
} satisfies Meta<typeof RangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...RangePicker.defaultProps,
    id: "range_picker",
    label: "Range Picker",
    helperText: "Helper Text",
    placeholder: ["Start date", "End date"],
    popoverProps: {
      arrow: false,
      offset: [0, 8],
    },
  },
};

export const LeftLabel: Story = {
  args: {
    ...Default.args,
    labelPosition: "left",
  },
};
