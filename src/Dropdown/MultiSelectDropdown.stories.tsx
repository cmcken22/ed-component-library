import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import MultiSelectDropdown from "./MultiSelectDropdown";

const meta = {
  title: "Example/MultiSelectDropdown",
  component: MultiSelectDropdown,
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelectDropdown"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      action: "onChange",
    },
    status: {
      options: ["error", "success", "warning"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof MultiSelectDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Smaple: Story = {
  args: {
    ...MultiSelectDropdown.defaultProps,
    id: "dropdown",
    label: "Label",
    placeholder: "Placeholder",
    labelPosition: "top",
    getOptionLabel: (option: any) => option?.xxx,
    getOptionValue: (option: any) => option?.yyy,
    checkBoxSelection: true,
    fullWidth: true,
    options: [
      {
        xxx: "Option 1",
        yyy: "option1",
      },
      {
        xxx: "Option 2",
        yyy: "option2",
      },
      {
        xxx: "Option 3",
        yyy: "option3",
      },
      {
        xxx: "Option 4",
        yyy: "option4",
      },
      {
        xxx: "Option 5",
        yyy: "option5",
      },
    ],
  },
};

export const LeftLabel: Story = {
  args: {
    ...MultiSelectDropdown.defaultProps,
    ...Smaple.args,
    labelPosition: "left",
  },
};
