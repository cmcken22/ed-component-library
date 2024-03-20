import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { sourceCodeFormatter } from "sb-utils/index";
import Tabs, { Tab, TabContextProvider, TabPanel } from "src/Tabs";
import { Button, Typography } from "..";
import Drawer, { DrawerProps } from "./";

const meta = {
  title: "Example/Drawer",
  component: Drawer,
  render: (args: DrawerProps) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Drawer {...args} open={open} onClose={() => setOpen(false)} />
        <Button onClick={() => setOpen((p) => !p)}>Open</Button>
      </>
    );
  },
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("Drawer"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    marginTop: {
      control: {
        type: "number",
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...Drawer.defaultProps,
    title: "Drawer Title",
  },
};

export const WithContent: Story = {
  render: (args: DrawerProps) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Drawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          footer={<Typography variant="h5">Example Footer</Typography>}
          headerBorder={false}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
            }}
          >
            <TabContextProvider value="1">
              <Box
                sx={{
                  flexShrink: 0,
                }}
              >
                <Tabs gutter={16} hideBottomBorder={false}>
                  <Tab label="Tab 1" value="1" />
                  <Tab label="Tab 2" value="2" />
                </Tabs>
              </Box>
              <Box
                p={2}
                sx={{
                  height: "100%",
                  width: "100%",
                  flexGrow: 1,
                  overflow: "auto",
                }}
              >
                <TabPanel tabValue="1">
                  Tab 1 Content
                  {Array.from({ length: 100 }).map((_, i) => (
                    <p key={i}>Content {i}</p>
                  ))}
                </TabPanel>
                <TabPanel tabValue="2">Tab 2 Content</TabPanel>
              </Box>
            </TabContextProvider>
          </Box>
        </Drawer>
        <Button onClick={() => setOpen((p) => !p)}>Open</Button>
      </>
    );
  },
  args: {
    ...Drawer.defaultProps,
    title: "Drawer Title",
  },
};
