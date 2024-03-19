import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import Typography from "src/Typography";
import { useBreakPoint } from "src/utils";
import Grid from "./";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.charcoal["10"],
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const RenderGridItem = (args: any) => {
  const bp = useBreakPoint();
  return (
    <Grid.Item {...args}>
      <Item>
        {Object.keys(args).map((key, i) => (
          <span
            key={key}
            style={{
              color: bp === key ? "green" : "black",
              fontWeight: bp === key ? "bold" : "normal",
            }}
          >
            {key}={args[key]}
            {i < Object.keys(args).length - 1 ? "," : null}
            &nbsp;
          </span>
        ))}
      </Item>
    </Grid.Item>
  );
};

const meta = {
  title: "Example/Grid/Grid",
  component: Grid,
  subcomponents: { GridItem: Grid.Item },
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        transform: sourceCodeFormatter("Grid"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    spacing: {
      control: { type: "text" },
    },
    columnSpacing: {
      control: { type: "text" },
    },
    rowSpacing: {
      control: { type: "text" },
    },
    columns: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const bp = useBreakPoint();
    const arr = Array.from({ length: args?.columns }, (_, i) => i + 1);
    return (
      <Box>
        <Typography variant="h5" sx={{ m: 1 }}>
          Breakpoint: {bp}
        </Typography>
        <Grid {...args}>
          {arr?.map((i) => (
            <Grid.Item key={`grid-item--${i}`} xs={1}>
              <Box
                sx={{
                  backgroundColor: "rgba(255, 0, 255, 0.4)",
                  textAlign: "center",
                }}
              >
                {i}
              </Box>
            </Grid.Item>
          ))}
        </Grid>
        <Grid {...args}>
          <RenderGridItem xs={12} sm={8} md={6} lg={4} xl={10} />
          <RenderGridItem xs={12} sm={4} md={6} lg={8} xl={2} />
        </Grid>
      </Box>
    );
  },
  args: {
    ...Grid.defaultProps,
  },
};
