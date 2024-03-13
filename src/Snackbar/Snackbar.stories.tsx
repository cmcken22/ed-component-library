import type { Meta, StoryObj } from "@storybook/react";
import Button from "src/Button";
import Snackbar, { SnackbarOptions, enqueueSnackbar } from "./";

const meta = {
  title: "Example/Snackbar",
  // @ts-ignore
  component: enqueueSnackbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // @ts-ignore
  argTypes: {
    variant: {
      options: ["success", "warning", "error", "info"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<SnackbarOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // @ts-ignore
  render: (args) => <Snackbar {...args} />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        transform: (code, storyContext) => {
          const { args } = storyContext;
          let res = "";
          for (const key in args) {
            if (key === "message") continue;
            res += `  ${key}: ${JSON.stringify(args[key])};\n`;
          }
          return `enqueueSnackbar("${args.message}", {\n${res}});`;
        },
      },
    },
  },
  // @ts-ignore
  args: {
    message: "This is a success message",
    variant: "success",
    persist: false,
    preventDuplicate: false,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
    autoHideDuration: 3000,
    transitionDuration: 250,
  },
};

export const Play: Story = {
  // @ts-ignore
  render: (args) => (
    <Button
      onClick={() => {
        // @ts-ignore
        enqueueSnackbar(args.message, { ...args });
      }}
    >
      Click Me
    </Button>
  ),
  parameters: {
    docs: {
      source: {
        language: "tsx",
        transform: (code, storyContext) => {
          const { args } = storyContext;
          const params = { ...args };
          delete params.message;
          let res = "";
          res += "<Button";
          res += `\n onClick={() => {`;
          res += `\n   enqueueSnackbar("${args.message}", {`;
          for (const key in params) {
            res += `\n     ${key}: ${JSON.stringify(args[key])},`;
          }
          res += `\n   });`;
          res += `\n }`;
          res += `\n>`;
          res += `\n Click Me`;
          res += `\n</Button>`;
          return res;
        },
      },
    },
  },
  // @ts-ignore
  args: {
    message: "This is a message",
    variant: "info",
    persist: false,
    preventDuplicate: false,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
    autoHideDuration: 2000,
    // transitionDuration: 500,
  },
};