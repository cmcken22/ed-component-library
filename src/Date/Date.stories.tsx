
import type { Meta, StoryObj } from "@storybook/react";
import Date from "./";

const meta = {
  title: "Example/Date",
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component: Date,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Date>;

export default meta;
type Story = StoryObj<typeof Date>;

export const Default: Story = {
  args: {},
};
