import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import { useState } from "react";
import { sourceCodeFormatter } from "sb-utils/index";
import { Button, Typography } from "src";
import Drawer, { DrawerProps } from "./";

const meta = {
  title: "Example/Drawer/Drawer",
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
    width: {
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole("button");
    await userEvent.click(submitButton);
  },
};

export const WithContent: Story = {
  render: (args: DrawerProps) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Drawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          footer={<Typography variant="h5">Example Footer</Typography>}
        >
          <Box p={2}>
            <Typography variant="bodyR">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ea
              autem aut! Aliquid soluta beatae illo eum mollitia praesentium
              adipisci, exercitationem voluptatibus possimus, nihil sequi
              tempora dolor iste numquam obcaecati?
            </Typography>
          </Box>
        </Drawer>
        <Button onClick={() => setOpen((p) => !p)}>Open</Button>
      </>
    );
  },
  args: {
    ...Drawer.defaultProps,
    title: "Drawer Title",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole("button");
    await userEvent.click(submitButton);
  },
};
