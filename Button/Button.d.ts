import { ButtonProps } from "./Button.types";
declare const Button: {
    ({ id, children, onClick, color, variant, disabled, iconLeft, iconRight, loading, onHover, sx, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        variant: string;
        color: string;
        disabled: boolean;
        onHover: () => void;
        loading: boolean;
    };
};
export default Button;
