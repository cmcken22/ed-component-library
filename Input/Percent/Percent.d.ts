import { InputProps } from '..';
export interface PercentInputProps extends Omit<InputProps, "type" | "maxChars" | "onChange"> {
    onChange?: (value: string, formattedValue: string, floatValue: number) => void;
    fixedDecimalScale?: boolean;
    decimalScale?: number;
    thousandSeparator?: boolean;
}
declare const Percent: {
    ({ id, label, placeholder, status, helperText, disabled, value: passedValue, fullWidth, required, labelPosition, onChange, fixedDecimalScale, decimalScale, thousandSeparator, width, minWidth, }: PercentInputProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        labelPosition: string;
        fixedDecimalScale: boolean;
        thousandSeparator: boolean;
        disabled: boolean;
        required: boolean;
    };
};
export default Percent;
