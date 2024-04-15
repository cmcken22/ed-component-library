import type { Meta, StoryObj } from "@storybook/react";
import commonArgTypes from "sb-utils/commonArgTypes";
import { sourceCodeFormatter } from "sb-utils/index";
import Percent from ".";

const meta = {
  title: "Example/Inputs/Percent",
  component: Percent,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Percent"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    ...commonArgTypes.onChange,
    ...commonArgTypes.onBlur,
    ...commonArgTypes.onFocus,
    ...commonArgTypes.onClick,
    ...commonArgTypes.status,
    ...commonArgTypes.labelPosition,
    iconPlacement: {
      options: ["prefix", "suffix"],
      control: { type: "radio" },
    },
    thousandSeparator: {
      control: { type: "text" },
    },
    fixedDecimalScale: {
      control: { type: "boolean" },
    },
    decimalScale: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof Percent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    ...Percent.defaultProps,
    id: "Percent",
    label: "Percent",
    placeholder: "",
    disabled: false,
    helperText: "Helper Text",
    required: false,
    value: undefined,
    fullWidth: false,
    labelPosition: "top",
    tooltip: "Tooltip",
  },
};

export const LeftLabel: Story = {
  args: {
    ...Sample.args,
    labelPosition: "left",
  },
};

export const TableVariant: Story = {
  args: {
    ...Sample.args,
    variant: "table",
    label: "",
    helperText: "",
    color: "success.main",
  },
};
