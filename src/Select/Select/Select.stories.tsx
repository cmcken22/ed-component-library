import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import Avatar from "src/Avatar";
import Icon from "src/Icon";
import Select from ".";

const meta = {
  title: "Example/Select/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Select"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      options: ["error", "success", "warning"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Smaple: Story = {
  args: {
    ...Select.defaultProps,
    id: "Select",
    label: "Label",
    placeholder: "Placeholder",
    helperText: "Helper Text",
    labelPosition: "top",
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
      {
        label: "Option 4",
        value: "option4",
      },
      {
        label: "Option 5",
        value: "option5",
      },
      {
        label: "Option 6",
        value: "option6",
      },
      {
        label: "Option 7",
        value: "option7",
      },
      {
        label: "Option 8",
        value: "option8",
      },
    ],
  },
};

export const LeftLabel: Story = {
  args: {
    ...Select.defaultProps,
    ...Smaple.args,
    labelPosition: "left",
  },
};

export const CustomList: Story = {
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Select", {
          map: {
            getOptionLabel: "(option: any) => option.customLabel",
            getOptionValue: "(option: any) => option.customValue",
          },
        }),
      },
    },
  },
  args: {
    ...Select.defaultProps,
    id: "Select",
    label: "Custom List",
    placeholder: "Placeholder",
    labelPosition: "top",
    getOptionLabel: (option: any) => option.customLabel,
    getOptionValue: (option: any) => option.customValue,
    options: [
      {
        customLabel: "Option 1",
        customValue: "option1",
      },
      {
        customLabel: "Option 2",
        customValue: "option2",
      },
      {
        customLabel: "Option 3",
        customValue: "option3",
      },
      {
        customLabel: "Option 4",
        customValue: "option4",
      },
      {
        customLabel: "Option 5",
        customValue: "option5",
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
        transform: sourceCodeFormatter("Select", {
          map: {
            renderOption: RenderOptionCodeSample,
          },
        }),
      },
    },
  },
  render: (args) => {
    return (
      <Select
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
    ...Select.defaultProps,
    id: "Select",
    label: "Custom Option Renderer",
    placeholder: "Placeholder",
    labelPosition: "top",
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

const RenderValueCodeSample = `(value: string, selectedOption: any) => (
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
      <Icon icon={selectedOption?.icon} />
      {selectedOption?.label}
    </Box>
  )`;

export const CustomValueRenderer: Story = {
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Select", {
          map: {
            renderValue: RenderValueCodeSample,
          },
        }),
      },
    },
  },
  render: (args) => {
    return (
      <Select
        {...args}
        renderValue={(value: string, selectedOption: any) => (
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
            <Icon icon={selectedOption?.icon} />
            {selectedOption?.label}
          </Box>
        )}
      />
    );
  },
  args: {
    ...Select.defaultProps,
    id: "Select",
    label: "Custom Option Renderer",
    placeholder: "Placeholder",
    labelPosition: "top",
    options: [
      {
        icon: "HappyEmoji",
        label: "Option 1",
        value: "option1",
      },
      {
        icon: "SadEmoji",
        label: "Option 2",
        value: "option2",
      },
      {
        icon: "Hammer",
        label: "Option 3",
        value: "option3",
      },
      {
        icon: "Star",
        label: "Option 4",
        value: "option4",
      },
      {
        icon: "Heart",
        label: "Option 5",
        value: "option5",
      },
    ],
    renderValue: () => <></>,
  },
};

export const TableVariant: Story = {
  render: (args) => (
    <Box
      sx={{
        height: "100px",
        width: "300px",
        // backgroundColor: "rgba(255, 0, 255, 0.1)",
      }}
    >
      <Select {...args} />
    </Box>
  ),
  args: {
    ...Smaple.args,
    id: "Select",
    label: "",
    helperText: "",
    placeholder: "Placeholder",
    labelPosition: "top",
    variant: "table",
    fullWidth: true,
  },
};
