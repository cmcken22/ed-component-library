import type { Meta, StoryObj } from "@storybook/react";
import DateField from "./";

const meta = {
  title: "Example/Date",
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component: DateField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      action: "changed",
    },
  },
} satisfies Meta<typeof DateField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <DateField {...args} currentDate={new Date(args?.currentDate)} />;
  },
  args: {
    ...DateField.defaultProps,
    format: "DD-MM-YYYY",
    // value: new Date(),
    currentDate: new Date(),
    disableFuture: true,
    disablePast: true,
    // onChange: (date: Date) => console.log("XXdateXX:", date),
  },
};
// export const Range: Story = {
//   // @ts-ignore
//   // render: (args) => <DateRangePicker {...args} />,
//   // args: {
//   //   range: true,
//   // },
// };
