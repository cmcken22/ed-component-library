import { SxProps } from '@mui/material';

export interface OverflowRowCounterProps {
    id?: string;
    className?: string;
    sx?: SxProps;
    gap?: string | number;
    children?: React.ReactNode;
    counterPosition?: "left" | "right";
}
