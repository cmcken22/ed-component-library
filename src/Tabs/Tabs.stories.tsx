import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { sourceCodeFormatter } from "sb-utils/index";
import Tabs, { Tab, TabContextProvider, TabPanel } from "./";

const Code = (res: string) => `
<TabContextProvider value={value}>
  <Tabs${res}  >
    <Tab label="Tab 1" value="1" />
    <Tab label="Tab 2" value="2" />
  </Tabs>
  <div style={{ marginTop: "8px" }}>
    <TabPanel tabValue="1">Tab 1 Content</TabPanel>
    <TabPanel tabValue="2">Tab 2 Content</TabPanel>
  </div>
</TabContextProvider>
`;

const meta = {
  title: "Example/Tabs",
  component: Tabs,
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
  render: (args: any) => {
    const [value, setValue] = useState("1");
    return (
      <Box
        sx={{
          height: "200px",
          width: "300px",
        }}
      >
        <TabContextProvider value={value}>
          <Tabs {...args} onTabChange={setValue}>
            <Tab label="Tab 1" value="1" />
            <Tab label="Tab 2" value="2" />
          </Tabs>
          <Box mt={1}>
            <TabPanel tabValue="1">Tab 1 Content</TabPanel>
            <TabPanel tabValue="2">Tab 2 Content</TabPanel>
          </Box>
        </TabContextProvider>
      </Box>
    );
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // @ts-expect-error
  args: {
    ...Tabs.defaultProps,
    // children: null,
  },
};
