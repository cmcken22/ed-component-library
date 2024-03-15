import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "src/utils";
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
    getOptionLabel: (option: any) => option.xxx,
    getOptionValue: (option: any) => option.yyy,
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
    ],
  },
};
