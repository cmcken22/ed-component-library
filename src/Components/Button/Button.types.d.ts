import { IconVariantType } from '../Icon';
import { ReactNode } from '../../../node_modules/react';
import { SxProps } from '@mui/material';

export interface ButtonProps {
    id?: string;
    className?: string;
    children?: ReactNode | string;
    variant?: "contained" | "outlined" | "link";
    color?: any;
    onClick?: (e: any) => void;
    disabled?: boolean;
    iconLeft?: IconVariantType | ReactNode;
    iconRight?: IconVariantType | ReactNode;
    loading?: boolean;
    onHover?: (hovered: boolean) => void;
    sx?: SxProps;
}
