import { Box, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { sourceCodeFormatter } from "sb-utils/index";
import Button from "../../Button";
import Modal from "./";

const meta = {
  title: "Example/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Modal"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Modal.Header
            title="Title"
            subtitle="Header Subtitle or Short Sentence"
          />
          <Modal.Content>
            <Box>
              <Typography variant="body1">Content</Typography>
            </Box>
          </Modal.Content>
          <Modal.Footer
            acceptBtnText="Confirm"
            cancelBtnText="Close"
            onAccept={() => setOpen(false)}
            onCancel={() => setOpen(false)}
          />
        </Modal>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
      </>
    );
  },
  args: {
    ...Modal.defaultProps,
    open: false,
  },
};
