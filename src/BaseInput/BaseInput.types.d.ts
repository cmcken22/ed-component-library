import { Status } from '../CommonTypes';
import { SxProps } from '@mui/material';

export interface BaseInputProps {
    id?: string;
    className?: string;
    status?: keyof typeof Status;
    disabled?: boolean;
    fullWidth?: boolean;
    children?: React.ReactNode;
    /**
     * Style props for the container
     * @type SxProps
     */
    sx?: SxProps;
    tooltip?: string;
    componentType?: string;
    variant?: "standard" | "outlined" | "table";
    color?: string;
    required?: boolean;
    labelPosition?: "top" | "left";
    label?: string;
    helperText?: string;
}
export interface StandardInputProps extends Omit<BaseInputProps, "children" | "componentType"> {
}
export type BaseInputContext = {
    id?: string;
    className?: string;
    fullWidth?: boolean;
    componentType?: string;
    sx?: SxProps;
    status?: keyof typeof Status | undefined;
    required?: boolean;
    disabled?: boolean;
    labelPosition?: "top" | "left";
    endAdornment?: React.ReactNode;
    setLabelPosition: (pos: string) => void;
    setStatus?: (status: Status | undefined) => void;
    tooltip?: string;
    variant?: "standard" | "outlined" | "table";
};
export declare const BaseInputContext: import('../../node_modules/react').Context<BaseInputContext>;
