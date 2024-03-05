import Chip from "./Chip";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Smaple: Story = {
  args: {
    type: "positive",
    text: "Chip",
    hideIcon: false,
    iconPosition: "left",
    // tooltip: "This is a Chip",
  },
  argTypes: {
    type: {
      options: ["positive", "negative", "warning", "pending", "neutral"],
      control: { type: "radio" },
    },
  }
};
