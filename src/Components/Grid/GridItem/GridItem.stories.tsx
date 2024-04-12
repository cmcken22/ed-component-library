import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import { useBreakPoint } from "src/utils";
import Grid from "../Grid";
import GridItem from "./GridItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.charcoal["10"],
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const meta = {
  title: "Example/Grid/Grid Item",
  component: GridItem,
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        transform: sourceCodeFormatter("Grid.Item"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    xs: {
      control: { type: "number" },
    },
    sm: {
      control: { type: "number" },
    },
    md: {
      control: { type: "number" },
    },
    lg: {
      control: { type: "number" },
    },
    xl: {
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof GridItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const bp = useBreakPoint();
    return (
      <Grid>
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
      </Grid>
    );
  },
  args: {
    ...GridItem.defaultProps,
    xs: 12,
    sm: 8,
    md: 6,
    lg: 4,
    xl: 3,
  },
};
