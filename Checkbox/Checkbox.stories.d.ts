import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: {
        ({ label, defaultChecked, disabled }: any): import("react/jsx-runtime").JSX.Element;
        defaultProps: {};
    };
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Smaple: Story;
