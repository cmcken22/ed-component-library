import { ButtonProps } from '../../Button';
import { SxProps } from '@mui/material';

export declare enum OPERAND {
    EQUAL_TO = "Equal to",
    MORE_THAN = "More than",
    LESS_THAN = "Less than",
    BETWEEN = "Between"
}
export interface OperandFilterControlProps {
    id?: string;
    className?: string;
    sx?: SxProps;
    label?: string;
    /**
     * The component to render the input as will default to NumberInput.
     */
    Component?: React.ElementType;
    /**
     * Props to pass to the Component
     */
    ComponentProps?: any;
    onSubmit?: (value: any[]) => void;
    onClear?: (value: any[]) => void;
    value?: any[];
    defaultValue?: any[];
    min?: number;
    max?: number;
    clearBtnText?: string;
    clearBtnProps?: ButtonProps;
    applyBtnText?: string;
    applyBtnProps?: ButtonProps;
}
