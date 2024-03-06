import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: {
        ({ variant, children, fontWeight, fontStyle, className, color, fontSize, preventTextSelection, sx, }: import("./Typography").TypographyProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: {
            preventTextSelection: boolean;
            sx: {};
        };
    };
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Sample: Story;
