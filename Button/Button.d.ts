import { SxProps } from "@mui/material";
import { ReactNode } from "react";
import { IconVariantType } from '../Icon';
export interface ButtonProps {
    children?: ReactNode;
    variant?: "contained" | "outlined" | "link";
    color?: any;
    onClick?: () => void;
    disabled?: boolean;
    iconLeft?: IconVariantType | React.FC<React.SVGProps<SVGSVGElement>>;
    iconRight?: IconVariantType | React.FC<React.SVGProps<SVGSVGElement>>;
    onHover?: () => void;
    sx?: SxProps;
}
declare const Button: {
    ({ children, onClick, color, variant, disabled, iconLeft, iconRight, onHover, sx, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        variant: string;
        color: string;
        disabled: boolean;
        onHover: () => void;
    };
};
export default Button;
