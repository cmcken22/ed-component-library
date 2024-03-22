/// <reference types="react" />
import { SxProps } from "@mui/material";
export interface TabPanelProps {
    id?: string;
    className?: string;
    sx?: SxProps;
    children?: React.ReactNode;
    tabValue: string | number;
}
