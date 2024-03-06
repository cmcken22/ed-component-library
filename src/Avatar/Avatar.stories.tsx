import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   size: { control: AvatarSize },
  // },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Sample: Story = {
  args: {
    text: "JD",
    size: "default",
    // onHover: (hovered: boolean) => action("onHover")(hovered),
    // onClick: (hovered: boolean) => action("onClick")(hovered),
  },
  argTypes: {
    size: { control: { type: 'radio', options: ['default', 'large', 'small'] } },
  },
};

export const WithImage: Story = {
  args: {
    text: "JD",
    size: "default",
    src: "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/highres-mjb-4858.jpg?1643119143",
    // onHover: (hovered: boolean) => action("onHover")(hovered),
    // onClick: (hovered: boolean) => action("onClick")(hovered),
  },
};
