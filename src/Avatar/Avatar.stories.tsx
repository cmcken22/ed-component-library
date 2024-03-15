import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "src/utils";
import Avatar from "./";

const meta = {
  title: "Example/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Button"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio", options: ["default", "large", "small"] },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    text: "JD",
    size: "default",
  },
};

export const Small: Story = {
  args: {
    text: "JD",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    text: "JD",
    size: "large",
  },
};

export const WithImage: Story = {
  args: {
    text: "JD",
    size: "default",
    src: "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/highres-mjb-4858.jpg?1643119143",
  },
};
