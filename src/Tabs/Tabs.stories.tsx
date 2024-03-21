import { Box, Tooltip } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { sourceCodeFormatter } from "sb-utils/index";
import { IconVariant } from "src/Icon";
import { Button, Icon, Typography } from "..";
import Tabs, { Tab, TabContextProvider, TabPanel } from "./";

const Code = (res: string) => `
<TabContextProvider defaultValue="1">
  <Tabs${res}  >
    <Tab label="Tab 1" value="1" />
    <Tab label="Tab 2" value="2" />
    <Tab label="Tab 3" value="3" disabled />
  </Tabs>
  <div style={{ marginTop: "8px" }}>
    <TabPanel tabValue="1">Tab 1 Content</TabPanel>
    <TabPanel tabValue="2">Tab 2 Content</TabPanel>
    <TabPanel tabValue="3">Tab 3 Content</TabPanel>
  </div>
</TabContextProvider>
`;

const meta = {
  title: "Example/Tabs",
  component: Tabs,
  subcomponents: { TabContextProvider, Tab, TabPanel },
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: (_, args) => {
          let res = sourceCodeFormatter("Tabs", { indent: 2 })(_, args);
          res = res?.replace("<Tabs", ``);
          res = res?.replace("/>", ``);
          return Code(res);
        },
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    gutter: {
      control: {
        type: "number",
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: any) => {
    return (
      <Box
        sx={{
          height: "200px",
          width: "300px",
        }}
      >
        <TabContextProvider defaultValue="1">
          <Tabs {...args}>
            <Tab label="Tab 1" value="1" />
            <Tab label="Tab 2" value="2" />
            <Tab label="Tab 3" value="3" disabled />
          </Tabs>
          <Box mt={1}>
            <TabPanel tabValue="1">Tab 1 Content</TabPanel>
            <TabPanel tabValue="2">Tab 2 Content</TabPanel>
            <TabPanel tabValue="3">Tab 3 Content</TabPanel>
          </Box>
        </TabContextProvider>
      </Box>
    );
  },
  // @ts-expect-error
  args: {
    ...Tabs.defaultProps,
  },
};

export const CustomTabs: Story = {
  render: (args: any) => {
    return (
      <Box
        sx={{
          height: "200px",
          width: "300px",
        }}
      >
        <TabContextProvider defaultValue="1">
          <Tabs {...args}>
            <Tab value="1">
              <Box
                display="flex"
                justifyContent="space-between"
                gap={1}
                alignItems="center"
              >
                <Typography variant="bodyXS">Tab 1</Typography>
                <Tooltip title="This is a tooltip" placement="top" arrow>
                  <span>
                    <Icon
                      icon={IconVariant.WarningV2}
                      height="12px"
                      width="12px"
                      sx={{
                        transform: "rotate(180deg)",
                      }}
                    />
                  </span>
                </Tooltip>
              </Box>
            </Tab>
            <Tab value="2">
              <Button>Tab 2</Button>
            </Tab>
          </Tabs>
          <Box mt={1}>
            <TabPanel tabValue="1">This tab has a tooltip</TabPanel>
            <TabPanel tabValue="2">This tab has a button</TabPanel>
          </Box>
        </TabContextProvider>
      </Box>
    );
  },
  // @ts-expect-error
  args: {
    ...Tabs.defaultProps,
  },
};
