import type { StoryObj } from "@storybook/react";
import Button from "./Button";
declare const meta: {
    title: string;
    component: {
        ({ children, onClick, color, variant, disabled, iconLeft, iconRight, onHover, sx, }: import("./Button").ButtonProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: {
            variant: string;
            color: string;
            disabled: boolean;
            onHover: () => void;
        };
    };
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        color: {
            options: string[];
            control: {
                type: string;
            };
        };
        variant: {
            options: string[];
            control: {
                type: string;
            };
        };
        iconLeft: {
            options: string[];
            control: {
                type: string;
            };
        };
        iconRight: {
            options: string[];
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof Button>;
export declare const Sample: Story;
export declare const WithIcon: Story;
