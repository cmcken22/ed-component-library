import { SxProps } from '@mui/material';

export interface ContentProps {
    id?: string;
    className?: string;
    sx?: SxProps;
    children?: React.ReactNode;
    height?: string;
    maxHeight?: string;
    minHeight?: string;
}
