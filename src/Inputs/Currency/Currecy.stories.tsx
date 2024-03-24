import type { Meta, StoryObj } from "@storybook/react";
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
    let prefix = args.prefix;
    // @ts-expect-error
    if (prefix === "null") {
      prefix = null;
    }
    let suffix = args.suffix;
    // @ts-expect-error
    if (suffix === "null") {
      suffix = null;
    }
    return (
      <Currency
        {...args}
        thousandSeparator={thousandSeparator}
        prefix={prefix}
        suffix={suffix}
      />
    );
  },
  argTypes: {
    onChange: { action: "changed" },
    thousandSeparator: {
      control: { type: "text" },
    },
    prefix: {
      options: ["null", "Dollar", "Pound", "Euro", "$", "£", "€"],
      control: { type: "select" },
    },
    suffix: {
      options: ["null", "Dollar", "Pound", "Euro", "$", "£", "€"],
      control: { type: "select" },
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
    value: "Hello world",
    fullWidth: false,
    labelPosition: "top",
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
    labelPosition: "left",
  },
};
