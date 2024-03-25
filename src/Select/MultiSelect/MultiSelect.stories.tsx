import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import Avatar from "src/Avatar";
import Icon from "src/Icon";
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
    value: ["option1", "option2", "option3", "option4"],
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
      {
        label: "Option 9",
        value: "option9",
      },
      {
        label: "Option 10",
        value: "option10",
      },
      {
        label: "Option 11",
        value: "option11",
      },
      {
        label: "Option 12",
        value: "option12",
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

const RenderValueCodeSample = `(value: string[], selectedOptions: any[]) => (
    <Box
      key={value?.length}
      sx={{
        height: "40px",
        display: "flex",
        gap: "8px",
        width: "100%",
        alignItems: "center",
      }}
    >
      {selectedOptions?.map((opt: any) => (
        <Icon key={opt?.icon} icon={opt?.icon} />
      ))}
    </Box>
  )`;

export const CustomValueRenderer: Story = {
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelect", {
          map: {
            renderValue: RenderValueCodeSample,
          },
        }),
      },
    },
  },
  render: (args) => {
    return (
      <MultiSelect
        {...args}
        renderValue={(value: string[], selectedOptions: any) => {
          return (
            <Box
              key={value?.length}
              sx={{
                height: "40px",
                display: "flex",
                gap: "8px",
                width: "100%",
                alignItems: "center",
              }}
            >
              {selectedOptions?.map((opt: any) => (
                <Icon key={opt?.icon} icon={opt?.icon} />
              ))}
            </Box>
          );
        }}
      />
    );
  },
  args: {
    ...MultiSelect.defaultProps,
    id: "Select",
    label: "Custom Option Renderer",
    placeholder: "Placeholder",
    labelPosition: "top",
    value: ["option1", "option2", "option3", "option4", "option5"],
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
  // parameters: {
  //   layout: "centered",
  //   docs: {
  //     source: {
  //       transform: sourceCodeFormatter("Select", {
  //         map: {
  //           renderValue: RenderValueCodeSample,
  //         },
  //       }),
  //     },
  //   },
  // },
  render: (args) => (
    <Box
      sx={{
        height: "100px",
        width: "300px",
        // backgroundColor: "rgba(255, 0, 255, 0.1)",
      }}
    >
      <MultiSelect {...args} />
    </Box>
  ),
  args: {
    ...Default.args,
    value: [
      "option1",
      "option2",
      "option3",
      "option4",
      "option5",
      "option6",
      "option7",
      "option8",
      "option9",
      "option10",
      "option11",
      "option12",
    ],
    fullWidth: true,
    id: "Select",
    label: "",
    helperText: "",
    placeholder: "Placeholder",
    labelPosition: "top",
    variant: "table",
    wrap: !false,
  },
};
