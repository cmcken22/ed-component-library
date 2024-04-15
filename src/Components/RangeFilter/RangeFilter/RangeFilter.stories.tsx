import type { Meta, StoryObj } from "@storybook/react";
import commonArgTypes from "sb-utils/commonArgTypes";
import { sourceCodeFormatter } from "sb-utils/index";
import Currency from "src/Components/Inputs/Currency";
import RangeFilter from ".";

const meta = {
  title: "Example/RangeFilter/RangeFilter",
  component: RangeFilter,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("RangeFilter"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    ...commonArgTypes.onChange,
  },
} satisfies Meta<typeof RangeFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // @ts-ignore
  args: {
    ...RangeFilter.defaultProps,
    label: "Range Filter",
    placeholder: "Select a range",
    helperText: "Helper text",
    Component: Currency,
    ComponentProps: {
      prefix: "Euro",
    },
  },
};
