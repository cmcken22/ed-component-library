import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: {
        ({ id, type, text, hideIcon, iconPosition, onClick, onHover, children, }: import("./Chip").ChipProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: {
            type: "warning" | "positive" | "negative" | "pending" | "neutral";
            hideIcon: boolean;
            iconPosition: "right" | "left";
        };
    };
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Smaple: Story;
