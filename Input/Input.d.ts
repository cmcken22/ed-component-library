/// <reference types="react" />
import { TextField } from "@mui/material";
import { BaseInputProps } from '../BaseInput';
export interface InputProps extends BaseInputProps {
    id?: string;
    label?: string;
    placeholder?: string;
    helperText?: string;
    value?: string | number;
    required?: boolean;
    labelPosition?: "top" | "left";
    onChange?: (value: string) => void;
    endAdornment?: React.ReactNode;
    fullWidth?: boolean;
    disabled?: boolean;
    type?: "text" | "password" | "number";
    debounce?: number;
    maxChars?: number;
    width?: string | number;
    minWidth?: string | number;
}
declare const Input: {
    ({ id, label, placeholder, status, helperText, disabled, value: passedValue, fullWidth, required, labelPosition, type, onChange, debounce, maxChars, width, minWidth, }: InputProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        labelPosition: string;
        multiline: boolean;
        type: string;
        minWidth: string;
    };
    Currency: {
        ({ id, label, placeholder, status, helperText, disabled, value: passedValue, fullWidth, required, labelPosition, onChange, width, minWidth, }: import("./Currency").CurrencyInputProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: {
            labelPosition: string;
            thousandSeparator: boolean;
            fixedDecimalScale: boolean;
            decimalScale: number;
            customInput: typeof TextField;
            fullWidth: boolean;
            disabled: boolean;
            required: boolean;
            minWidth: string;
        };
    };
    Percent: {
        ({ id, label, placeholder, status, helperText, disabled, value: passedValue, fullWidth, required, labelPosition, onChange, fixedDecimalScale, decimalScale, thousandSeparator, width, minWidth, }: import("./Percent").PercentInputProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: {
            labelPosition: string;
            fixedDecimalScale: boolean;
            thousandSeparator: boolean;
            disabled: boolean;
            required: boolean;
        };
    };
    TextArea: {
        ({ id, label, placeholder, status, helperText, disabled, value: passedValue, fullWidth, required, labelPosition, maxRows, minRows, onChange, debounce, maxChars, maxWords, width, minWidth, }: import("./TextArea").TextAreaProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: {
            labelPosition: string;
            minRows: number;
            maxRows: number;
            minWidth: string;
        };
    };
};
export default Input;
