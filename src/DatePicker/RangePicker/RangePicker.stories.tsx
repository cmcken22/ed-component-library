import type { Meta, StoryObj } from "@storybook/react";
import RangePicker from "./RangePicker";

const meta = {
  title: "Example/RangePicker",
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component: RangePicker,
  parameters: {
    layout: "centered",
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
    return <RangePicker {...args} {...formattedProps} />;
  },
  args: {
    ...RangePicker.defaultProps,
    label: "Range Picker",
    helperText: "Helper Text",
  },
};
