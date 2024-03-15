import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "src/utils";
import SingleDatePicker from "./SingleDatePicker";

const meta = {
  title: "Example/Single Date Picker",
  component: SingleDatePicker,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("SingleDatePicker"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof SingleDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // ...SingleDatePicker.defaultProps,
    value: "",
    disableFuture: false,
    disableCurrent: false,
    disablePast: false,
    dateDisabled: () => {},
    currentDate: new Date(),
    numberOfMonths: 1,
    range: !false,
    onSelect: (data: any) => {
      console.log("data:", data);
    },
  },
};
