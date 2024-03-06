import { TextField } from "@mui/material";
import { InputProps } from "../Input";
export interface CurrencyInputProps extends Omit<InputProps, "type" | "maxChars" | "onChange"> {
    onChange?: (value: string, formattedValue: string, floatValue: number) => void;
}
declare const Currency: {
    ({ id, label, placeholder, status, helperText, disabled, value: passedValue, fullWidth, required, labelPosition, onChange, width, minWidth, }: CurrencyInputProps): import("react/jsx-runtime").JSX.Element;
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
export default Currency;
