import type { StoryObj } from "@storybook/react";
import Avatar from "./";
declare const meta: {
    title: string;
    component: {
        ({ size, text, src, onHover, onClick, sx }: import("./Avatar").AvatarProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: {
            size: string;
        };
    };
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        size: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof Avatar>;
export declare const Default: Story;
export declare const Small: Story;
export declare const Large: Story;
export declare const WithImage: Story;
