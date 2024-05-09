import { SxProps } from '@mui/material';

export interface HeaderProps {
    id?: string;
    className?: string;
    sx?: SxProps;
    title?: string;
    subtitle?: string;
    /**
     * Passing children will override the default title and subtitle
     */
    children?: React.ReactNode;
}
