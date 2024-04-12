import type { Meta, StoryObj } from "@storybook/react";
import Button from "src/Components/Button";
import Snackbar, { SnackbarOptions, enqueueSnackbar } from ".";

const enqueueSnackbarCodeSnippet = (_, context: any) => {
  let args = "";
  for (const key in context.args) {
    if (key === "message") continue;
    const value = context.args[key];
    if (typeof value === "function") {
      args += `  ${key}={() => {}}\n`;
    } else if (typeof value === "object") {
      const formattedValue = JSON.stringify(value, null, 2).replace(
        /\n/g,
        "\n  "
      );
      args += `  ${key}={${formattedValue}}\n`;
    } else if (typeof value === "boolean") {
      args += `  ${key}={${value.toString()}}\n`;
    } else if (typeof value === "number") {
      args += `  ${key}={${value.toString()}}\n`;
    } else {
      args += `  ${key}="${value}"\n`;
    }
  }

  return `enqueueSnackbar("${context?.args?.message}", {\n` + `${args}` + `});`;
};

const meta = {
  title: "Example/Snackbar",
  // @ts-ignore
  component: enqueueSnackbar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The Snackbar is dependent on the SnackbarProvider. You must wrap your app in the SnackbarProvider",
      },
    },
  },
  // @ts-ignore
  args: {
    // @ts-ignore
    message: "This is a success message",
    variant: "success",
    persist: false,
    preventDuplicate: false,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
    hideIcon: false,
    autoHideDuration: 3000,
    transitionDuration: 250,
    width: "100%",
  },
  // @ts-ignore
  argTypes: {
    variant: {
      options: ["success", "warning", "error", "info"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<SnackbarOptions | "message">;

export default meta;
type Story = StoryObj<typeof meta>;

// @ts-ignore
export const Default: Story = {
  // @ts-ignore
  render: (args) => <Snackbar {...args} />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        transform: enqueueSnackbarCodeSnippet,
      },
    },
  },
};

// @ts-ignore
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
        transform: (_, storyContext) => {
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
};
