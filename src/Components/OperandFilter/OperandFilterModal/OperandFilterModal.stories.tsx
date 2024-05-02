import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import OperandFilterModal from ".";
import OperandFilterControl from "../OperandFilterControl";

const meta = {
  title: "Example/OperandFilter/OperandFilterModal",
  component: OperandFilterModal,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("OperandFilterModal"),
      },
    },
  },
  tags: ["autodocs"],
  // rendering the control component so we can actually see the component in the story
  // and capture the screenshot for visual regression testing
  render: (args: any) => <OperandFilterControl {...args} />,
  argTypes: {},
} satisfies Meta<typeof OperandFilterModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...OperandFilterModal.defaultProps,
    label: "Operand Filter",
  },
};
