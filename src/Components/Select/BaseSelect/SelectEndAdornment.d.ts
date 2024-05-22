/// <reference types="react" />
interface SelectEndAdornmentProps {
    endAdornment?: React.ReactNode;
    open: boolean;
    allowClear?: boolean;
    onOpen?: () => void;
    onClear?: () => void;
    disabled?: boolean;
    persistEndAdornment?: boolean;
}
declare const SelectEndAdornment: ({ endAdornment, open, allowClear, onOpen, onClear, disabled, persistEndAdornment, ...props }: SelectEndAdornmentProps) => import("react/jsx-runtime").JSX.Element;
export default SelectEndAdornment;
