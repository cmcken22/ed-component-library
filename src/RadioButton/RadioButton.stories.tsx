import RadioButton from "./RadioButton";
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Radio Button',
  component: RadioButton,
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
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof RadioButton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Sample: Story = {
  args: {
    label: "Radio Button",
    value: "radio",
    checked: false,
    disabled: false,
    // onChange: (value, checked) => action("onChange")(value, checked),
  },
  // argTypes: {
  //   status: {
  //     options: ["error", "success", "warning"],
  //     control: { type: "select" },
  //   },
  // }
};