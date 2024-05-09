import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { sourceCodeFormatter } from "sb-utils/index";
import { Typography } from "src/index";
import Button from "../../Button";
import Modal from "./";

const TestModal = ({ children, ...args }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        <Modal.Header
          title="Title"
          subtitle="Header Subtitle or Short Sentence"
        />
        <Modal.Content>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {children}
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
};

const meta = {
  title: "Example/Modal",
  component: Modal,
  subcomponents: {
    Header: Modal.Header,
    Content: Modal.Content,
    Footer: Modal.Footer,
  },
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Modal"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onClose: {
      action: "onClose",
    },
    open: {
      control: { type: "boolean" },
    },
    hideCloseIcon: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: any) => (
    <TestModal {...args}>
      <Typography variant="bodyR">Content</Typography>
    </TestModal>
  ),
  args: {
    ...Modal.defaultProps,
    open: false,
  },
};

export const MaxContent: Story = {
  render: (args: any) => (
    <TestModal {...args}>
      {Array.from({ length: 100 }, (_, i) => (
        <Typography key={i} variant="bodyR">
          Content
        </Typography>
      ))}
    </TestModal>
  ),
  args: {
    ...Default.args,
  },
};
