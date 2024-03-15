import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "src/utils";
import MultiDatePicker from "./MultiDatePicker";

const meta = {
  title: "Example/Multi Date Picker",
  component: MultiDatePicker,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiDatePicker"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof MultiDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // ...Calendar2.defaultProps,
    value: "",
    disableFuture: false,
    disableCurrent: false,
    disablePast: false,
    dateDisabled: () => {},
    currentDate: new Date(),
    numberOfMonths: 2,
    onSelect: (data: any) => {
      console.log("data:", data);
    },
  },
};
