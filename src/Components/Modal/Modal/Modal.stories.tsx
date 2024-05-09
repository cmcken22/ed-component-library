import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { formatArgs, sourceCodeFormatter } from "sb-utils/index";
import { IconVariant } from "src/Components/Icon";
import { Icon, Typography } from "src/index";
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
        <Modal.Content>{children}</Modal.Content>
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

const CustomHeaderModal = ({ children, ...args }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        <Modal.Header>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="row"
            gap={1}
            sx={{
              color: "primary.main",
            }}
          >
            <Icon icon={IconVariant.HappyEmoji} color="inherit" />
            <Typography variant="h4" color="inherit">
              Custom Header
            </Typography>
            <Icon icon={IconVariant.HappyEmoji} color="inherit" />
          </Box>
        </Modal.Header>
        <Modal.Content>{children}</Modal.Content>
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

const CustomFooterModal = ({ children, ...args }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal {...args} open={open} onClose={() => setOpen(false)}>
        <Modal.Header
          title="Title"
          subtitle="Header Subtitle or Short Sentence"
        />
        <Modal.Content>{children}</Modal.Content>
        <Modal.Footer
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Icon icon={IconVariant.Hand} color="inherit" />
          <Typography variant="h4" color="inherit">
            Custom Footer
          </Typography>
          <Icon icon={IconVariant.Save} color="inherit" />
        </Modal.Footer>
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
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: (_: any, context: any) => {
          const { args } = context;
          const argString = formatArgs({ args, indent: 1 });
          return `
<Modal
${argString}>
  <Modal.Header title="Title" subtitle="Header Subtitle or Short Sentence" />
  <Modal.Content>
      <Typography variant="bodyR">Content</Typography>
  </Modal.Content>
  <Modal.Footer
    acceptBtnText="Confirm"
    cancelBtnText="Close"
    onAccept={() => {}}
    onCancel={() => {}}
  />
</Modal>
`;
        },
      },
    },
  },
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
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: (_: any, context: any) => {
          const { args } = context;
          const argString = formatArgs({ args, indent: 1 });
          return `
<Modal
${argString}>
  <Modal.Header title="Title" subtitle="Header Subtitle or Short Sentence" />
  <Modal.Content>
    {Array.from({ length: 100 }, (_, i) => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography key={i} variant="bodyR">
          Content
        </Typography>
      </Box>
    ))}
  </Modal.Content>
  <Modal.Footer
    acceptBtnText="Confirm"
    cancelBtnText="Close"
    onAccept={() => {}}
    onCancel={() => {}}
  />
</Modal>
`;
        },
      },
    },
  },
  render: (args: any) => (
    <TestModal {...args}>
      {Array.from({ length: 100 }, (_, i) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography key={i} variant="bodyR">
            Content
          </Typography>
        </Box>
      ))}
    </TestModal>
  ),
  args: {
    ...Default.args,
  },
};

export const CustomHeader: Story = {
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: (_: any, context: any) => {
          const { args } = context;
          const argString = formatArgs({ args, indent: 1 });
          return `
<Modal
${argString}>
  <Modal.Header>
    <Box
      display="flex"
      alignItems="center"
      flexDirection="row"
      gap={1}
      sx={{
        color: "primary.main",
      }}
    >
      <Icon icon={IconVariant.HappyEmoji} color="inherit" />
      <Typography variant="h4" color="inherit">
        Custom Header
      </Typography>
      <Icon icon={IconVariant.HappyEmoji} color="inherit" />
    </Box>
  </Modal.Header>
  <Modal.Content>
    <Typography variant="bodyR">
      Content
    </Typography>
  </Modal.Content>
  <Modal.Footer
    acceptBtnText="Confirm"
    cancelBtnText="Close"
    onAccept={() => {}}
    onCancel={() => {}}
  />
</Modal>
`;
        },
      },
    },
  },
  render: (args: any) => (
    <CustomHeaderModal {...args}>
      <Typography variant="bodyR">Content</Typography>
    </CustomHeaderModal>
  ),
  args: {
    ...Default.args,
  },
};

export const CustomFooter: Story = {
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: (_: any, context: any) => {
          const { args } = context;
          const argString = formatArgs({ args, indent: 1 });
          return `
<Modal
${argString}>
  <Modal.Header title="Title" subtitle="Header Subtitle or Short Sentence" />
  <Modal.Content>
    <Typography variant="bodyR">
      Content
    </Typography>
  </Modal.Content>
  <Modal.Footer
    sx={{
      justifyContent: "space-between",
    }}
  >
    <Icon icon={IconVariant.Hand} color="inherit" />
    <Typography variant="h4" color="inherit">
      Custom Footer
    </Typography>
    <Icon icon={IconVariant.Save} color="inherit" />
  </Modal.Footer>
</Modal>
`;
        },
      },
    },
  },
  render: (args: any) => (
    <CustomFooterModal {...args}>
      <Typography variant="bodyR">Content</Typography>
    </CustomFooterModal>
  ),
  args: {
    ...Default.args,
  },
};
