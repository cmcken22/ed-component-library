import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
  title: "Example/Dropdown",
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  component: Dropdown,
  parameters: {
    layout: "centered",
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
    id: "dropdown",
    label: "Label",
    placeholder: "Placeholder",
    labelPosition: "top",
    // fullWidth: true,
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
