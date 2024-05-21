import type { Meta, StoryObj } from "@storybook/react";
import commonArgTypes from "sb-utils/commonArgTypes";
import { sourceCodeFormatter } from "sb-utils/index";
import Currency from ".";

const meta = {
  title: "Example/Inputs/Currency",
  component: Currency,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Currency"),
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
    return <Currency {...args} thousandSeparator={thousandSeparator} />;
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
    prefix: {
      options: [undefined, "Dollar", "Pound", "Euro"],
      control: { type: "select" },
    },
    suffix: {
      options: [undefined, "Dollar", "Pound", "Euro"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Currency>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    ...Currency.defaultProps,
    id: "Primary",
    label: "Primary",
    placeholder: "Enter a value",
    disabled: false,
    helperText: "Helper Text",
    required: false,
    value: undefined,
    fullWidth: false,
    labelPosition: "top",
    tooltip: "Tooltip",
  },
};

export const AllowClear: Story = {
  args: {
    ...Sample.args,
    value: "99",
    allowClear: true,
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
