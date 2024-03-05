import Dropdown from "./Dropdown";
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Dropdown',
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Smaple: Story = {
  args: {
    id: "__dropdown__",
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
    ],
  },
  argTypes: {
    status: {
      options: ["error", "success", "warning"],
      control: { type: "select" },
    },
  }
};