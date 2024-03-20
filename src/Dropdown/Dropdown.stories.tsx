import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import Dropdown from "./Dropdown";

const meta = {
  title: "Example/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Dropdown"),
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
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Smaple: Story = {
  args: {
    ...Dropdown.defaultProps,
    id: "dropdown",
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
    ...Dropdown.defaultProps,
    ...Smaple.args,
    labelPosition: "left",
  },
};

export const CustomList: Story = {
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Dropdown", {
          getOptionLabel: "(option: any) => option.customLabel",
          getOptionValue: "(option: any) => option.customValue",
        }),
      },
    },
  },
  args: {
    ...Dropdown.defaultProps,
    id: "dropdown",
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
