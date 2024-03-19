/// <reference types="react" />
export interface PopoverProps {
    children: React.ReactNode;
    open?: boolean;
    anchorEl: HTMLElement | null;
    onClose?: () => void;
    arrow?: boolean;
    allowFlip?: boolean;
    offset?: number[];
    placement?: "auto-end" | "auto-start" | "auto" | "bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top";
}
