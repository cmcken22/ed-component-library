import type { Meta, StoryObj } from "@storybook/react";
import commonArgTypes from "sb-utils/commonArgTypes";
import { sourceCodeFormatter } from "sb-utils/index";
import NumberInput from ".";

const meta = {
  title: "Example/Inputs/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("NumberInput"),
      },
    },
  },
  tags: ["autodocs"],
  render: (args) => {
    let thousandSeparator = args.thousandSeparator;
    if (thousandSeparator === "true") {
      thousandSeparator = true;
    }
    if (thousandSeparator === "false") {
      thousandSeparator = false;
    }
    return <NumberInput {...args} thousandSeparator={thousandSeparator} />;
  },
  argTypes: {
    ...commonArgTypes.onChange,
    ...commonArgTypes.onBlur,
    ...commonArgTypes.onFocus,
    ...commonArgTypes.onClick,
    ...commonArgTypes.status,
    ...commonArgTypes.labelPosition,
    thousandSeparator: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...NumberInput.defaultProps,
    label: "Number Input",
    placeholder: "Please enter a number",
    helperText: "Helper text",
    tooltip: "This is a tooltip",
  },
};
