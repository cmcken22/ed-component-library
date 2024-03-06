import { SxProps } from "@mui/material";
export interface AvatarProps {
    size?: "default" | "large" | "small";
    text?: string;
    sx?: SxProps;
    src?: string;
    onClick?: () => void;
    onHover?: (hovered: boolean) => void;
}
declare const Avatar: {
    ({ size, text, src, onHover, onClick, sx }: AvatarProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        size: string;
    };
};
export default Avatar;
