import type { Meta, StoryObj } from "@storybook/react";
import DateField from "./DateRange";

const meta = {
  title: "Example/DateRange",
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
    status: {
      options: ["error", "success", "warning"],
      control: { type: "radio" },
    },
    // labelPosition: {
    //   options: ["top", "left"],
    //   control: { type: "radio" },
    // },
  },
} satisfies Meta<typeof DateField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    console.log("args?.currentDate:", args?.currentDate);
    return <DateField {...args} currentDate={new Date(args?.currentDate)} />;
  },
  args: {
    ...DateField.defaultProps,
    // format: "DD-MM-YYYY",
    format: "MMM DD, YYYY",
    // value: new Date(),
    currentDate: new Date(),
    disableFuture: false,
    disablePast: false,
    status: undefined,
  },
};
// export const Range: Story = {
//   // @ts-ignore
//   // render: (args) => <DateRangePicker {...args} />,
//   // args: {
//   //   range: true,
//   // },
// };
