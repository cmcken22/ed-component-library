import type { StoryObj } from "@storybook/react";
import Avatar from "./";
declare const meta: {
    title: string;
    component: {
        ({ id, size, text, src, onHover, onClick, sx }: import('./Avatar').AvatarProps): import('../../node_modules/react/jsx-runtime').JSX.Element;
        defaultProps: Partial<import('./Avatar').AvatarProps>;
    };
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
};
export default meta;
type Story = StoryObj<typeof Avatar>;
export declare const Default: Story;
