import { SxProps } from '@mui/material';

export type ChipType = "positive" | "negative" | "warning" | "pending" | "neutral";
export interface ChipProps {
    id?: string;
    className?: string;
    type?: ChipType;
    text?: string;
    hideIcon?: boolean;
    iconPosition?: "left" | "right";
    onClick?: () => void;
    onHover?: (hovered: boolean) => void;
    children?: string | React.ReactNode;
    sx?: SxProps;
}
