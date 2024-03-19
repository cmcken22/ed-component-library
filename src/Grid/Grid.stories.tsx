import { Box, useMediaQuery, useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import { Typography } from "..";
import Grid from "./";

const useBreakPoint = () => {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const xs = useMediaQuery(theme.breakpoints.up("xs"));

  if (xl) return "xl";
  if (lg) return "lg";
  if (md) return "md";
  if (sm) return "sm";
  if (xs) return "xs";
  return "";
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.charcoal["10"],
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const meta = {
  title: "Example/Grid",
  component: Grid,
  parameters: {
    layout: "fullscreen",
    // fullscreen: true,
    docs: {
      source: {
        transform: sourceCodeFormatter("Grid"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const bp = useBreakPoint();
    return (
      <Box>
        <Typography variant="h5" sx={{ m: 1 }}>
          Breakpoint: {bp}
        </Typography>
        <Grid {...args}>
          <Grid.Item xs="auto">
            <Item>xs=12, sm=8, md={6}</Item>
          </Grid.Item>
          <Grid.Item xs={12} sm={4} md={6}>
            <Item>xs=12, sm=4, md={6}</Item>
          </Grid.Item>
          <Grid.Item xs={6}>
            <Item>xs=6</Item>
          </Grid.Item>
          <Grid.Item xs={6}>
            <Item>xs=6</Item>
          </Grid.Item>
        </Grid>
      </Box>
    );
  },
  args: {},
};
