import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./";

const meta = {
  title: "Example/Avatar",
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
};
