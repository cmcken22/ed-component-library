import type { Meta, StoryObj } from "@storybook/react";
import commonArgTypes from "sb-utils/commonArgTypes";
import { sourceCodeFormatter } from "sb-utils/index";
import DateField from ".";

const meta = {
  title: "Example/Inputs/DateField",
  component: DateField,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("DateField"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    ...commonArgTypes.onChange,
    ...commonArgTypes.onClick,
    onValidation: {
      action: "onValidation",
    },
  },
} satisfies Meta<typeof DateField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...DateField.defaultProps,
    label: "Date Field",
    tooltip: "This is a date field",
    helperText: "Helper Text",
  },
};
