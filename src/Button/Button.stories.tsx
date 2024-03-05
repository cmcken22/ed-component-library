import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;


// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = (args) => {
//   const iconLeft: any = useMemo(() => {
//     // @ts-ignore
//     if (args?.iconLeft === "undefined") return undefined;
//     return args?.iconLeft;
//   }, [args?.iconLeft]);

//   const iconRight: any = useMemo(() => {
//     // @ts-ignore
//     if (args?.iconRight === "undefined") return undefined;
//     return args?.iconRight;
//   }, [args?.iconRight]);

//   return <Button {...args} iconLeft={iconLeft} iconRight={iconRight} />;
// };

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Sample: Story = {
  args: {
    children: "Sample Button",
    variant: "contained",
    color: "primary",
    // onHover: (e) => action("onHover")(e),
  },
  argTypes: {
    color: {
      options: ["primary", "secondary", "danger"],
      control: { type: "select" },
    },
    variant: {
      options: ["contained", "outlined", "link"],
      control: { type: "select" },
    },
    // iconLeft: {
    //   options: ["undefined", ...Object.keys(IconVariant)],
    //   control: { type: "select" },
    // },
    // iconRight: {
    //   options: ["undefined", ...Object.keys(IconVariant)],
    //   control: { type: "select" },
    // },
  }
};


// export const WithIcon = Template.bind({});
// WithIcon.args = {
//   children: "Click Me",
//   variant: "contained",
//   color: "primary",
//   iconLeft: "Heart",
//   onHover: (e) => action("onHover")(e),
// };
// WithIcon.decorators = [withActions("click")];
// WithIcon.argTypes = {
//   color: {
//     options: ["primary", "secondary", "danger"],
//     control: { type: "select" },
//   },
//   variant: {
//     options: ["contained", "outlined", "link"],
//     control: { type: "select" },
//   },
//   iconLeft: {
//     options: ["undefined", ...Object.keys(IconVariant)],
//     control: { type: "select" },
//   },
//   iconRight: {
//     options: ["undefined", ...Object.keys(IconVariant)],
//     control: { type: "select" },
//   },
// };
