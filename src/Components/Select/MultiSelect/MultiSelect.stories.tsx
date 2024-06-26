import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import commonArgTypes from "sb-utils/commonArgTypes";
import { sourceCodeFormatter } from "sb-utils/index";
import Avatar from "src/Components/Avatar";
import Chip from "src/Components/Chip";
import Icon from "src/Components/Icon";
import OverflowRowCounter from "src/Components/OverflowRowCounter";
import Typography from "src/Components/Typography";
import MultiSelect from ".";

const renderFirstAndLastOptions = (options: any[]) => {
  let res = "[";
  const opt1 = options[0];
  const opt2 = options[options.length - 1];
  if (opt1) {
    res += `{
      label: "${opt1.label}",
      value: "${opt1.value}",
    },\n`;
  }
  if (opt2) {
    res += `    ...\n`;
    res += `    {
      label: "${opt2.label}",
      value: "${opt2.value}",
    },\n`;
  }
  res += "  ]";
  return res;
};

const meta = {
  title: "Example/Select/MultiSelect",
  component: MultiSelect,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelect", {
          map: {
            options: renderFirstAndLastOptions,
          },
        }),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    ...commonArgTypes.onChange,
    ...commonArgTypes.status,
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...MultiSelect.defaultProps,
    label: "Multi Select",
    placeholder: "Select many options",
    helperText: "Select many options",
    tooltip: "Tooltip",
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

export const AllowClear: Story = {
  args: {
    ...Default.args,
    allowClear: true,
  },
};

export const AlternativeChipType: Story = {
  args: {
    ...Default.args,
    ChipProps: {
      type: "positive",
      variant: "outlined",
    },
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
            options: renderFirstAndLastOptions,
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
    <OverflowRowCounter>
      {selectedOptions?.map((opt: any) => (
        <Icon key={opt?.icon} icon={opt?.icon} />
      ))}
    </OverflowRowCounter>
  )`;

export const CustomValueRenderer: Story = {
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelect", {
          map: {
            renderValue: RenderValueCodeSample,
            options: renderFirstAndLastOptions,
          },
        }),
      },
    },
  },
  render: (args) => {
    return (
      <MultiSelect
        {...args}
        renderValue={(_, selectedOptions: any) => {
          return (
            <OverflowRowCounter>
              {selectedOptions?.map((opt: any) => (
                <Icon key={opt?.icon} icon={opt?.icon} />
              ))}
            </OverflowRowCounter>
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
    value: [
      "option1",
      "option2",
      "option3",
      "option4",
      "option5",
      "option6",
      "option7",
    ],
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
      {
        icon: "User",
        label: "Option 6",
        value: "option6",
      },
      {
        icon: "ToolsV2",
        label: "Option 7",
        value: "option7",
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
    wrap: true,
  },
};

const StatusFilterCodeSample = `(_, selectedOptions: any) => {
    return (
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Box sx={{ flexGrow: 0 }}>
          <Typography preventTextSelection variant="bodyR">
            Status
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <OverflowRowCounter counterPosition="left">
            {selectedOptions?.map((opt: any) => (
              <Chip
                key={opt?.value}
                type={opt?.status}
                text={opt?.label}
              />
            ))}
          </OverflowRowCounter>
        </Box>
      </Box>
    );
  }`;

export const StatusFilter: Story = {
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelect", {
          map: {
            renderValue: StatusFilterCodeSample,
            options: renderFirstAndLastOptions,
          },
        }),
      },
    },
  },
  render: (args) => (
    <Box
      sx={{
        height: "100px",
        width: "300px",
      }}
    >
      <MultiSelect
        {...args}
        renderValue={(_, selectedOptions: any) => {
          return (
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <Box sx={{ flexGrow: 0 }}>
                <Typography preventTextSelection variant="bodyR">
                  Status
                </Typography>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  width: "100%",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <OverflowRowCounter counterPosition="left">
                  {selectedOptions?.map((opt: any) => (
                    <Chip
                      key={opt?.value}
                      type={opt?.status}
                      text={opt?.label}
                    />
                  ))}
                </OverflowRowCounter>
              </Box>
            </Box>
          );
        }}
      />
    </Box>
  ),
  args: {
    ...Default.args,
    value: ["option1", "option2", "option3", "option4", "option5"],
    options: [
      {
        status: "positive",
        label: "Option 1",
        value: "option1",
      },
      {
        status: "negative",
        icon: "SadEmoji",
        label: "Option 2",
        value: "option2",
      },
      {
        status: "warning",
        label: "Option 3",
        value: "option3",
      },
      {
        status: "pending",
        label: "Option 4",
        value: "option4",
      },
      {
        status: "neutral",
        label: "Option 5",
        value: "option5",
      },
      {
        status: "positive",
        label: "Option 6",
        value: "option6",
      },
      {
        status: "negative",
        label: "Option 7",
        value: "option7",
      },
    ],
    fullWidth: true,
    id: "Select",
    label: "",
    helperText: "",
    placeholder: "Status",
    labelPosition: "top",
    renderValue: () => <></>,
  },
};
