import type { Meta, StoryObj } from "@storybook/react";
import CheckboxGroup from "./";

const meta = {
  title: "Example/Checkbox Group",
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  args: {
    ...CheckboxGroup.defaultProps,
    value: ["option_1", "option_3"],
    labelPosition: "right",
    options: [
      {
        label: "Option 1",
        value: "option_1",
        disabled: false,
      },
      {
        label: "Option 2",
        value: "option_2",
        disabled: false,
      },
      {
        label: "Option 3",
        value: "option_3",
        disabled: true,
      },
      {
        label: "Option 4",
        value: "option_4",
        disabled: false,
      },
    ],
  },
};

export const CustomList: Story = {
  args: {
    ...CheckboxGroup.defaultProps,
    labelPosition: "right",
    getOptionLabel: (option: any) => option._id,
    getOptionValue: (option: any) => option.data,
    getOptionDisabled: (option: any) =>
      option?._id === "Test Option 3" ? true : false,
    options: [
      {
        _id: "Test Option 1",
        data: "option_1",
      },
      {
        _id: "Test Option 2",
        data: "option_2",
      },
      {
        _id: "Test Option 3",
        data: "option_3",
      },
      {
        _id: "Test Option 4",
        data: "option_4",
      },
    ],
  },
};
