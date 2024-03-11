/// <reference types="react" />
export interface StandardDropdownOption {
    label: string;
    value: string;
    disabled?: boolean;
}
export interface DropdownProps {
    id?: string;
    label?: string;
    placeholder?: string;
    open?: boolean;
    status?: "error" | "success" | "warning";
    helperText?: string;
    disabled?: boolean;
    value?: string;
    required?: boolean;
    labelPosition?: "top" | "left";
    options: StandardDropdownOption[] | any[];
    onChange?: (value: string) => void;
    startAdornment?: () => React.ReactNode;
    getOptionLabel?: (option: any) => string;
    getOptionValue?: (option: any) => string;
    getOptionDisabled?: (option: any) => boolean;
    onHover?: (hovered: boolean) => void;
    defaultActiveFirstOption?: boolean;
    minWidth?: number | string;
    checkBoxSelection?: boolean;
}
declare const Dropdown: {
    ({ id, label, placeholder, open: defaultOpen, status, helperText, disabled, value: passedValue, required, labelPosition, onChange, options, getOptionLabel, getOptionValue, getOptionDisabled, onHover, defaultActiveFirstOption, minWidth, checkBoxSelection, }: DropdownProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        labelPosition: string;
        options: any[];
        minWidth: number;
    };
};
export default Dropdown;
