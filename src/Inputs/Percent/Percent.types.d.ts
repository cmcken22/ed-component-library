/// <reference types="react" />
import { StandardInputProps } from '../../BaseInput';
export interface PercentProps extends StandardInputProps {
    label?: string;
    placeholder?: string;
    helperText?: string;
    value?: string | number;
    required?: boolean;
    labelPosition?: "top" | "left";
    endAdornment?: React.ReactNode;
    debounce?: number;
    onChange?: (value: string, formattedValue: string, floatValue: number) => void;
    fixedDecimalScale?: boolean;
    decimalScale?: number;
    thousandSeparator?: boolean;
}
