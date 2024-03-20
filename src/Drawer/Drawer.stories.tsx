import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { sourceCodeFormatter } from "sb-utils/index";
import { Button } from "..";
import Drawer, { DrawerProps } from "./";

const meta = {
  title: "Example/Drawer",
  component: Drawer,
  render: (args: DrawerProps) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Drawer {...args} open={open} onClose={() => setOpen(false)} />
        <Button onClick={() => setOpen((p) => !p)}>Open</Button>
      </>
    );
  },
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Drawer"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    marginTop: {
      control: {
        type: "number",
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...Drawer.defaultProps,
    title: "Drawer Title",
  },
};
