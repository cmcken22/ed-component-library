import { Box } from "@mui/material";
import Typography from "../Typography";
import Icon, { IconVariant } from "./Icon";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const iconList = Object.keys(IconVariant).map((key: IconVariant) => {
  return {
    name: key,
    icon: key,
  };
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const Sample: Story = {
  render: (args) => (
    <Box
      sx={{
        maxWidth: "800px",
        display: "flex",
        flexWrap: "wrap",
        // justifyContent: "space-evenly",
        gap: 2,
        p: 3,
      }}
    >
      {iconList?.map((icon) => {
        if (!icon.icon) return null;
        return (
          <Box
            key={icon.name}
            onClick={() => console.log(icon.name)}
            sx={{
              width: "60px",
              mb: 1,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                p: 1,
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "charcoal.10",
                borderRadius: "4px",
                minWidth: "60px",
                width: "fit-content",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 0.5,
              }}
            >
              <Icon {...args} icon={icon.icon} />
            </Box>
            <Typography
              variant="errorMessage"
              sx={{
                textAlign: "center",
                width: "100%",
                display: "block",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {icon.name}
            </Typography>
          </Box>
        );
      })}
    </Box>
  ),
}
