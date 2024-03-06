import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: {
        ({ id, label, placeholder, status, helperText, disabled, value: passedValue, fullWidth, required, labelPosition, type, onChange, debounce, maxChars, width, minWidth, }: import("../Input").InputProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: {
            labelPosition: string;
            multiline: boolean;
            type: string;
            minWidth: string;
        };
        Currency: {
            ({ id, label, placeholder, status, helperText, disabled, value: passedValue, fullWidth, required, labelPosition, onChange, width, minWidth, }: import("../Currency").CurrencyInputProps): import("react/jsx-runtime").JSX.Element;
            defaultProps: {
                labelPosition: string;
                thousandSeparator: boolean;
                fixedDecimalScale: boolean;
                decimalScale: number;
                customInput: typeof import("@mui/material").TextField;
                fullWidth: boolean;
                disabled: boolean;
                required: boolean;
                minWidth: string;
            };
        };
        Percent: {
            ({ id, label, placeholder, status, helperText, disabled, value: passedValue, fullWidth, required, labelPosition, onChange, fixedDecimalScale, decimalScale, thousandSeparator, width, minWidth, }: import("../Percent").PercentInputProps): import("react/jsx-runtime").JSX.Element;
            defaultProps: {
                labelPosition: string;
                fixedDecimalScale: boolean;
                thousandSeparator: boolean;
                disabled: boolean;
                required: boolean;
                width: string;
                minWidth: string;
            };
        };
        TextArea: {
            ({ id, label, placeholder, status, helperText, disabled, value: passedValue, fullWidth, required, labelPosition, maxRows, minRows, onChange, debounce, maxChars, maxWords, width, minWidth, }: import("../TextArea").TextAreaProps): import("react/jsx-runtime").JSX.Element;
            defaultProps: {
                labelPosition: string;
                minRows: number;
                maxRows: number;
                minWidth: string;
            };
        };
    };
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Text: Story;
