import { ButtonProps } from './Button.types';

declare const Button: {
    ({ id, className, children, onClick, color, variant, disabled, iconLeft, iconRight, loading, onHover, sx, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<ButtonProps>;
};
export default Button;
