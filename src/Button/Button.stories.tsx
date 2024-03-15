import type { Meta, StoryObj } from "@storybook/react";
import { useMemo } from "react";
import { IconVariant } from "src/Icon";
import { sourceCodeFormatter } from "src/utils";
import Button from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
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
    color: {
      options: ["primary", "secondary", "danger"],
      control: { type: "select" },
    },
    variant: {
      options: ["contained", "outlined", "link"],
      control: { type: "select" },
    },
    iconLeft: {
      options: ["undefined", ...Object.keys(IconVariant)],
      control: { type: "select" },
    },
    iconRight: {
      options: ["undefined", ...Object.keys(IconVariant)],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

const renderTemplate = (args) => {
  const iconLeft: any = useMemo(() => {
    if (args?.iconLeft === "undefined") return undefined;
    return args?.iconLeft;
  }, [args?.iconLeft]);

  const iconRight: any = useMemo(() => {
    if (args?.iconRight === "undefined") return undefined;
    return args?.iconRight;
  }, [args?.iconRight]);

  return <Button {...args} iconLeft={iconLeft} iconRight={iconRight} />;
};

export const Sample: Story = {
  render: renderTemplate,
  args: {
    children: "Sample Button",
    variant: "contained",
    color: "primary",
  },
};

export const WithIcon: Story = {
  render: renderTemplate,
  args: {
    children: "Click Me",
    variant: "contained",
    color: "primary",
    iconLeft: "Heart",
  },
};
