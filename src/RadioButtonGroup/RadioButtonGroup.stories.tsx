import RadioButtonGroup from "./RadioButtonGroup";
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Radio Button Group',
  component: RadioButtonGroup,
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
} satisfies Meta<typeof RadioButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Sample: Story = {
  args: {
    ...RadioButtonGroup.defaultProps,
    options: [
      {
        label: "Option 1",
        value: "option_1",
        disabled: false,
      },
      {
        label: "Option 2",
        value: "option_2",
        disabled: false,
      },
      {
        label: "Option 3",
        value: "option_3",
        disabled: true,
      },
      {
        label: "Option 4",
        value: "option_4",
        disabled: false,
      },
    ],
    value: "",
    disabled: false,
    allowDeselect: false,
  },
  // argTypes: {}
};

