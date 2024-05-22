import { StandardInputProps } from '../../BaseInput';

export interface StandardSelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}
export interface BaseSelectProps extends StandardInputProps {
    label?: string;
    placeholder?: string;
    open?: boolean;
    helperText?: string;
    value?: string | string[];
    required?: boolean;
    labelPosition?: "top" | "left";
    /**
     * StandardSelectOption accepts label, value, and disabled,
     * or you can provide a custom list of options and utilize the getOptionLabel, getOptionValue, and getOptionDisabled methods.
     */
    options: StandardSelectOption[] | any[];
    onChange: (value: string | string[]) => void;
    getOptionLabel: (option: any) => string;
    getOptionValue: (option: any) => string;
    getOptionDisabled: (option: any) => boolean;
    onHover?: (hovered: boolean) => void;
    defaultActiveFirstOption?: boolean;
    checkBoxSelection?: boolean;
    maxListHeight?: number | string;
    multiple?: boolean;
    wrap?: boolean;
    renderSelectedValue?: (value: string | string[]) => any;
    getValueSelected?: (value: string) => boolean;
    disablePortal?: boolean;
    renderOption?: (option: any, { index, label, value, selected, disabled, }: {
        index: number;
        label: string;
        value: string;
        selected: boolean;
        disabled: boolean;
    }) => React.ReactNode;
    autoFocus?: boolean;
    allowClear?: boolean;
}
