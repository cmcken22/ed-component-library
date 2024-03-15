/// <reference types="react" />
import { SxProps } from "@mui/material";
export interface BaseInputProps {
    id?: string;
    className?: string;
    status?: "error" | "warning" | "success";
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
    status: "error" | "warning" | "success" | undefined;
    required?: boolean;
    disabled?: boolean;
    labelPosition?: "top" | "left";
    endAdornment?: React.ReactNode;
    setLabelPosition: (pos: string) => void;
};
export declare const BaseInputContext: import('../../node_modules/react').Context<BaseInputContext>;
