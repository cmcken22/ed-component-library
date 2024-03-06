import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: {
        ({ id, label, placeholder, open: defaultOpen, status, helperText, disabled, value: passedValue, required, labelPosition, onChange, options, getOptionLabel, getOptionValue, getOptionDisabled, onHover, defaultActiveFirstOption, minWidth, }: import("./Dropdown").DropdownProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: {
            labelPosition: "top" | "left";
            options: any[];
            minWidth: number;
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
