import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import OverflowRowCounter from ".";

const meta = {
  title: "Example/OverflowRowCounter",
  component: OverflowRowCounter,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("OverflowRowCounter"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof OverflowRowCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // render: (args) => (
  //   <Box
  //     sx={{
  //       width: "300px",
  //     }}
  //   >
  //     <OverflowRowCounter {...args} />
  //   </Box>
  // ),
  args: {
    ...OverflowRowCounter.defaultProps,
  },
};
