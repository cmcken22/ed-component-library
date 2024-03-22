import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import Select from ".";

const meta = {
  title: "Example/Select/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Select"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      options: ["error", "success", "warning"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Smaple: Story = {
  args: {
    ...Select.defaultProps,
    id: "Select",
    label: "Label",
    placeholder: "Placeholder",
    labelPosition: "top",
    options: [
      {
        label: "Option 1",
        value: "option1",
      },
      {
        label: "Option 2",
        value: "option2",
      },
      {
        label: "Option 3",
        value: "option3",
      },
      {
        label: "Option 4",
        value: "option4",
      },
      {
        label: "Option 5",
        value: "option5",
      },
    ],
  },
};

export const LeftLabel: Story = {
  args: {
    ...Select.defaultProps,
    ...Smaple.args,
    labelPosition: "left",
  },
};

export const CustomList: Story = {
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Select", {
          map: {
            getOptionLabel: "(option: any) => option.customLabel",
            getOptionValue: "(option: any) => option.customValue",
          },
        }),
      },
    },
  },
  args: {
    ...Select.defaultProps,
    id: "Select",
    label: "Custom List",
    placeholder: "Placeholder",
    labelPosition: "top",
    getOptionLabel: (option: any) => option.customLabel,
    getOptionValue: (option: any) => option.customValue,
    options: [
      {
        customLabel: "Option 1",
        customValue: "option1",
      },
      {
        customLabel: "Option 2",
        customValue: "option2",
      },
      {
        customLabel: "Option 3",
        customValue: "option3",
      },
      {
        customLabel: "Option 4",
        customValue: "option4",
      },
      {
        customLabel: "Option 5",
        customValue: "option5",
      },
    ],
  },
};
