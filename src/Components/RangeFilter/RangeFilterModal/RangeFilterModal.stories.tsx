import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import RangeFilterModal from ".";
import RangeFilterControl from "../RangeFilterControl";

const meta = {
  title: "Example/RangeFilter/RangeFilterModal",
  component: RangeFilterModal,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("RangeFilterModal"),
      },
    },
  },
  tags: ["autodocs"],
  // rendering the control component so we can actually see the component in the story
  // and capture the screenshot for visual regression testing
  render: (args: any) => <RangeFilterControl {...args} />,
  argTypes: {
    onSubmit: { action: "onSubmit" },
    onClear: { action: "onClear" },
  },
} satisfies Meta<typeof RangeFilterModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // @ts-ignore
  args: {
    ...RangeFilterModal.defaultProps,
    defaultValue: [20, 40],
    min: 0,
    max: 100,
    minDistance: 20,
    label: "Amount",
    displayValueTooltip: "off",
    minInputLabel: "Minimum",
    maxInputLabel: "Maximum",
  },
};
