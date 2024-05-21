import type { Meta, StoryObj } from "@storybook/react";
import commonArgTypes from "sb-utils/commonArgTypes";
import { sourceCodeFormatter } from "sb-utils/index";
import TextArea from "./TextArea";

const meta = {
  title: "Example/Inputs/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("TextArea"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    ...commonArgTypes.onChange,
    ...commonArgTypes.onFocus,
    ...commonArgTypes.onBlur,
    ...commonArgTypes.onClick,
    ...commonArgTypes.onHover,
    ...commonArgTypes.status,
    ...commonArgTypes.labelPosition,
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    ...TextArea.defaultProps,
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

export const AllowClear: Story = {
  args: {
    ...Sample.args,
    allowClear: true,
  },
};

export const LeftLabel: Story = {
  args: {
    ...Sample.args,
    labelPosition: "left",
    tooltip: "Tooltip",
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
