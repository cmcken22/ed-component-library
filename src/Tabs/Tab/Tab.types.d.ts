/// <reference types="react" />
import { SxProps } from "@mui/material";
export interface TabProps {
    id?: string;
    className?: string;
    label?: string;
    value?: string | number;
    sx?: SxProps;
    children?: React.ReactNode;
    disabled?: boolean;
}
