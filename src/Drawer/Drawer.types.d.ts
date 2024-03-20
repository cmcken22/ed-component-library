import { SxProps } from "@mui/material";
export interface DrawerProps {
    id?: string;
    className?: string;
    sx?: SxProps;
    open?: boolean;
    onClose?: () => void;
    anchor?: "left" | "top" | "right" | "bottom";
    marginTop?: number | string;
    width?: number | string;
    title?: string;
}
