import { SxProps } from '@mui/material';

export interface HorizontalStackProps {
    id?: string;
    className?: string;
    sx?: SxProps;
    children?: React.ReactNode;
    gap?: number | string;
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
}
