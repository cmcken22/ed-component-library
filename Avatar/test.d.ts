import type { StoryObj } from "@storybook/react";
import Avatar from "./";
declare const meta: {
    title: string;
    component: {
        ({ id, size, text, src, onHover, onClick, sx }: import("./Avatar").AvatarProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: {
            size: string;
        };
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
