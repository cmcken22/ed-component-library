import type { Meta, StoryObj } from "@storybook/react";
import commonArgTypes from "sb-utils/commonArgTypes";
import { sourceCodeFormatter } from "sb-utils/index";
import Currency from "src/Components/Inputs/Currency";
import Percent from "src/Components/Inputs/Percent";
import OperandFilter from ".";

const meta = {
  title: "Example/OperandFilter/OperandFilter",
  component: OperandFilter,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("OperandFilter"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    ...commonArgTypes.onChange,
  },
} satisfies Meta<typeof OperandFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...OperandFilter.defaultProps,
    label: "Operand Filter",
    placeholder: "Select a value",
    helperText: "Helper text",
    filterLabel: "Operand Filter",
  },
};

export const PercentFilter: Story = {
  args: {
    ...Default.args,
    label: "Percent Filter",
    placeholder: "Select a percent",
    helperText: "Helper text",
    filterLabel: "Filter by percent",
    Component: Percent,
  },
};

export const CurrencyFilter: Story = {
  args: {
    ...Default.args,
    label: "Currency Filter",
    placeholder: "Select a currency",
    helperText: "Helper text",
    filterLabel: "Filter by currency",
    Component: Currency,
  },
};
