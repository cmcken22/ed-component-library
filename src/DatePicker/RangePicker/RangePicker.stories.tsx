import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "src/utils";
import RangePicker from "./RangePicker";

const meta = {
  title: "Example/RangePicker",
  component: RangePicker,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("RangePicker"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      action: "changed",
    },
    value: {
      control: { type: "array" },
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
  args: {
    ...RangePicker.defaultProps,
    id: "range_picker",
    label: "Range Picker",
    helperText: "Helper Text",
    placeholder: ["Start date", "End date"],
    onValidation: (isValid: boolean) => {
      console.log("isValid:", isValid);
    },
    currentDate: new Date("2024-03-15T04:00:00.000Z"),
    value: [
      new Date("2024-03-12T04:00:00.000Z"),
      new Date("2024-03-17T04:00:00.000Z"),
    ],
  },
};
