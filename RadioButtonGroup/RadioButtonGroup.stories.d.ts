import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: {
        ({ options, value: selectedValue, onChange, disabled, row, allowDeselect, }: import("./RadioButtonGroup").RadioButtonGroupProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: {
            options: any[];
            value: any;
            disabled: boolean;
            row: boolean;
            allowDeselect: boolean;
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
