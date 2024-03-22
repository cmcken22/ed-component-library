import { StandardInputProps } from '../../BaseInput';
export interface PercentProps extends StandardInputProps {
    label?: string;
    placeholder?: string;
    helperText?: string;
    value?: string | number;
    required?: boolean;
    labelPosition?: "top" | "left";
    iconPlacement?: "prefix" | "suffix";
    /**
     * In the case that a staus icon is provided, the suffix will be hidden.
     * Setting `persistSuffix` to true will keep the suffix visible beside the status icon.
     */
    persistSuffix?: boolean;
    debounce?: number;
    onChange?: (value: string, formattedValue: string, floatValue: number) => void;
    fixedDecimalScale?: boolean;
    decimalScale?: number;
    /**
     * `thousandSeparator` can be passed as a boolean or a string.
     * Passing true will use the default separator (comma).
     * Passing a string will use that string as the separator.
     * @default false
     */
    thousandSeparator?: boolean | string;
    /**
     * Customize the `decimalSeparator`.
     * The decimal separator cannot be the same as the `thousandSeparator`.
     * You will receive an error if you try to use the same separator for both.
     * @default .
     */
    decimalSeparator?: string;
    allowLeadingZeros?: boolean;
    allowNegative?: boolean;
}
