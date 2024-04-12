import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import { useState } from "react";
import { sourceCodeFormatter } from "sb-utils/index";
import { Button, Typography } from "src";
import Tabs, { Tab, TabContextProvider, TabPanel } from "src/Components/Tabs";
import TabDrawer, { TabDrawerProps } from ".";

const Code = (res: string) => `
<TabDrawer${res}>
  <TabContextProvider defaultValue="1">
    <Tabs gutter={16}>
      <Tab label="Tab 1" value="1" />
      <Tab label="Tab 2" value="2" />
    </Tabs>
    <TabPanel tabValue="1">
      Tab 1 Content
      {Array.from({ length: 100 }).map((_, i) => (
        <p key={i}>Content {i}</p>
      ))}
    </TabPanel>
    <TabPanel tabValue="2">Tab 2 Content</TabPanel>
  </TabContextProvider>
</TabDrawer>
`;

const meta = {
  title: "Example/Drawer/TabDrawer",
  component: TabDrawer,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: (_, args) => {
          const options = {
            indent: 1,
            map: {
              footer: '<Typography variant="h5">Example Footer</Typography>',
            },
          };
          let res = sourceCodeFormatter("TabDrawer", options)(_, args);
          res = res?.replace("<TabDrawer", ``);
          res = res?.replace("/>", ``);
          return Code(res);
        },
      },
    },
  },
  render: (args: TabDrawerProps) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <TabDrawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          footer={<Typography variant="h5">Example Footer</Typography>}
          headerBorder={false}
        >
          <TabContextProvider defaultValue="1">
            <Tabs gutter={16}>
              <Tab label="Tab 1" value="1" />
              <Tab label="Tab 2" value="2" />
            </Tabs>
            <TabPanel tabValue="1">
              Tab 1 Content
              {Array.from({ length: 100 }).map((_, i) => (
                <p key={i}>Content {i}</p>
              ))}
            </TabPanel>
            <TabPanel tabValue="2">Tab 2 Content</TabPanel>
          </TabContextProvider>
        </TabDrawer>
        <Button onClick={() => setOpen((p) => !p)}>Open</Button>
      </>
    );
  },
  argTypes: {
    marginTop: {
      control: {
        type: "number",
      },
    },
    width: {
      control: {
        type: "number",
      },
    },
  },
} satisfies Meta<typeof TabDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...TabDrawer.defaultProps,
    title: "Example Title",
    footer: <Typography variant="h5">Example Footer</Typography>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole("button");
    await userEvent.click(submitButton);
  },
};
