import Checkbox from "./Checkbox";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Smaple: Story = {
  args: {
    defaultChecked: true,
    checked: true,
    disabled: false,
    label: "Primary",
  },
};