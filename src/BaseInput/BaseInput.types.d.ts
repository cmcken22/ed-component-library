/// <reference types="react" />
import { SxProps } from "@mui/material";
import { Status } from '../CommonTypes';
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
}
export interface StandardInputProps extends Omit<BaseInputProps, "children"> {
}
export type BaseInputContext = {
    status?: keyof typeof Status | undefined;
    required?: boolean;
    disabled?: boolean;
    labelPosition?: "top" | "left";
    endAdornment?: React.ReactNode;
    setLabelPosition: (pos: string) => void;
    setStatus?: (status: Status | undefined) => void;
};
export declare const BaseInputContext: import('../../node_modules/react').Context<BaseInputContext>;
