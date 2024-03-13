export default (componentName) => ({
  content: `
import type { Meta, StoryObj } from "@storybook/react";
import ${componentName} from "./";

const meta = {
  title: "Example/${componentName}",
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component: ${componentName},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {},
};
`,
  extension: `.stories.tsx`,
});
