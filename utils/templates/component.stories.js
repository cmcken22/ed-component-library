export default (componentName) => ({
  content: `
import type { Meta, StoryObj } from "@storybook/react";
 import { sourceCodeFormatter } from "sb-utils/index";
import ${componentName} from "./";

const meta = {
  title: "Example/${componentName}",
  component: ${componentName},
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("${componentName}"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
`,
  extension: `.stories.tsx`,
});
