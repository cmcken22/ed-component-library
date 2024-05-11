import type { Meta, StoryObj } from "@storybook/react";
import { useMemo } from "react";
import commonArgTypes from "sb-utils/commonArgTypes";
import { sourceCodeFormatter } from "sb-utils/index";
import { IconVariant } from "src/Components/Icon";
import Button from "./Button";

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

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // defaulting to dark because the button loading animation is white
    backgrounds: { default: "dark" },
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Button"),
      },
    },
  },
  render: renderTemplate,
  tags: ["autodocs"],
  argTypes: {
    ...commonArgTypes.onClick,
    ...commonArgTypes.onHover,
    color: {
      options: ["primary", "secondary", "danger"],
      control: { type: "select" },
    },
    variant: {
      options: ["contained", "outlined", "link"],
      control: { type: "select" },
    },
    iconLeft: {
      options: [undefined, ...Object.keys(IconVariant)],
      control: { type: "select" },
    },
    iconRight: {
      options: [undefined, ...Object.keys(IconVariant)],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "contained",
    color: "primary",
    loading: false,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    children: "Secondary Button",
    color: "secondary",
  },
};

export const Danger: Story = {
  args: {
    ...Primary.args,
    children: "Danger Button",
    color: "danger",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Click Me",
    variant: "contained",
    color: "primary",
    iconLeft: "Heart",
  },
};
