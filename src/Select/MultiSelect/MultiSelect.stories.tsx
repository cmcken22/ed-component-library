import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import Avatar from "src/Avatar";
import MultiSelect from ".";

const meta = {
  title: "Example/Select/MultiSelect",
  component: MultiSelect,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelect"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...MultiSelect.defaultProps,
    label: "Multi Select",
    placeholder: "Select many options",
    helperText: "Select many options",
    options: [
      {
        label: "Option 1",
        value: "option1",
      },
      {
        label: "Option 2",
        value: "option2",
      },
      {
        label: "Option 3",
        value: "option3",
      },
    ],
  },
};

const RenderOptionCodeSample = `(option: any, { label, value }: any) => (
  <Box
    key={value}
    sx={{
      height: "40px",
      display: "flex",
      gap: "8px",
      width: "100%",
      alignItems: "center",
    }}
  >
    <Avatar text={option?.user} />
    {label}
  </Box>
)`;

export const CustomOptionRenderer: Story = {
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelect", {
          map: {
            renderOption: RenderOptionCodeSample,
          },
        }),
      },
    },
  },
  render: (args) => {
    return (
      <MultiSelect
        {...args}
        renderOption={(option: any, { label, value }: any) => (
          <Box
            key={value}
            sx={{
              height: "40px",
              display: "flex",
              gap: "8px",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Avatar text={option?.user} />
            {label}
          </Box>
        )}
      />
    );
  },
  args: {
    ...MultiSelect.defaultProps,
    ...Default.args,
    label: "Custom Option Renderer",
    options: [
      {
        user: "JD",
        label: "Option 1",
        value: "option1",
      },
      {
        user: "CD",
        label: "Option 2",
        value: "option2",
      },
      {
        user: "MZ",
        label: "Option 3",
        value: "option3",
      },
      {
        user: "KN",
        label: "Option 4",
        value: "option4",
      },
      {
        user: "SE",
        label: "Option 5",
        value: "option5",
      },
    ],
    renderOption: () => <></>,
  },
};
