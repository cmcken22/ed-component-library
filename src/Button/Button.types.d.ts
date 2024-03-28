import { IconVariantType } from '../Icon';
import { ReactNode } from '../../node_modules/react';
import { SxProps } from '@mui/material';

export declare const dataTestId = "Button";
export declare const baseClassName = "Button";
export interface ButtonProps {
    id?: string;
    className?: string;
    children?: ReactNode | string;
    variant?: "contained" | "outlined" | "link";
    color?: any;
    onClick?: () => void;
    disabled?: boolean;
    iconLeft?: IconVariantType | ReactNode;
    iconRight?: IconVariantType | ReactNode;
    loading?: boolean;
    onHover?: () => void;
    sx?: SxProps;
}
