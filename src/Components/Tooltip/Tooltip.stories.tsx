import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import Button from "../Button";
import HorizontalStack from "../HorizontalStack";
import Icon, { IconVariant } from "../Icon";
import Typography from "../Typography";
import Tooltip, { TooltipProps } from "./";

const meta = {
  title: "Example/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Tooltip"),
      },
    },
  },
  tags: ["autodocs"],
  render: (args: TooltipProps) => (
    <Box>
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
  ),
  argTypes: {},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...Tooltip.defaultProps,
    title: "This is a tooltip",
    // content:
    //   "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.",
    defaultOpen: true,
    placement: "top",
    persistent: false,
    allowClose: false,
  },
};

export const Light: Story = {
  args: {
    ...Default.args,
    variant: "light",
  },
};

export const AllowClose: Story = {
  args: {
    ...Default.args,
    defaultOpen: false,
    allowClose: true,
    persistent: true,
  },
};

const CustomTitleCode = `
    <HorizontalStack sx={{ alignItems: "center" }}>
      <Typography variant="h6">Custom title</Typography>
      <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
    </HorizontalStack>
  `;

export const CustomTitle: Story = {
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Tooltip", {
          map: {
            title: CustomTitleCode,
          },
        }),
      },
    },
  },
  args: {
    ...Default.args,
    defaultOpen: false,
    allowClose: false,
    persistent: false,
    title: (
      <HorizontalStack sx={{ alignItems: "center" }}>
        <Typography variant="bodyR">Custom title</Typography>
        <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
      </HorizontalStack>
    ),
  },
};

const CustomContentCode = `
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        margin: "0 auto",
      }}
    >
      <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
      <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
      <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
    </div>
  `;

export const CustomContent: Story = {
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Tooltip", {
          map: {
            content: CustomContentCode,
          },
        }),
      },
    },
  },
  args: {
    ...Default.args,
    defaultOpen: false,
    allowClose: false,
    persistent: false,
    title: "Custom Content",
    content: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          margin: "0 auto",
        }}
      >
        <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
        <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
        <Icon icon={IconVariant.HappyEmoji} size={20} color="inherit" />
      </div>
    ),
  },
};

const CustomFooterCode = `
    <HorizontalStack
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        mt: 1,
      }}
    >
      <Button variant="outlined">Prev</Button>
      <Button>Next</Button>
    </HorizontalStack>
  `;

export const CustomFooter: Story = {
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Tooltip", {
          map: {
            footer: CustomFooterCode,
          },
        }),
      },
    },
  },
  args: {
    ...Default.args,
    defaultOpen: false,
    allowClose: false,
    persistent: false,
    variant: "light",
    title: "Custom Footer",
    footer: (
      <HorizontalStack
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          mt: 1,
        }}
      >
        <Button variant="outlined">Prev</Button>
        <Button>Next</Button>
      </HorizontalStack>
    ),
  },
};
