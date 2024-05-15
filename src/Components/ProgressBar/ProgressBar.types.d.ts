import { SxProps } from '@mui/material';

export interface ProgressBarProps {
    id?: string;
    className?: string;
    sx?: SxProps;
    /**
     * The value of the progress bar. Should be between 0 and 100.
     * If not provided, the progress bar will be indeterminate.
     */
    value?: number;
    status?: "success" | "error" | undefined;
    leftText?: string;
    rightText?: string;
    errorMessage?: string;
    width?: string | number;
    minWidth?: string | number;
    fullWidth?: boolean;
    color?: string;
    railColor?: string;
    /**
     * The height of the progress bar.
     */
    size?: 4;
}
