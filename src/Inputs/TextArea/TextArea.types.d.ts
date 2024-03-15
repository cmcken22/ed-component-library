/// <reference types="react" />
import { StandardInputProps } from '../../BaseInput';
export interface TextAreaProps extends StandardInputProps {
    label?: string;
    placeholder?: string;
    helperText?: string;
    value?: string | number;
    required?: boolean;
    labelPosition?: "top" | "left";
    onChange?: (value: string) => void;
    endAdornment?: React.ReactNode;
    debounce?: number;
    maxChars?: number;
    maxWords?: number;
    maxRows?: number;
    minRows?: number;
}
