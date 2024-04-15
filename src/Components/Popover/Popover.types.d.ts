/// <reference types="react" />
export declare enum PopoverPlacement {
    "auto-end" = "auto-end",
    "auto-start" = "auto-start",
    auto = "auto",
    "bottom-end" = "bottom-end",
    "bottom-start" = "bottom-start",
    bottom = "bottom",
    "left-end" = "left-end",
    "left-start" = "left-start",
    left = "left",
    "right-end" = "right-end",
    "right-start" = "right-start",
    right = "right",
    "top-end" = "top-end",
    "top-start" = "top-start",
    top = "top"
}
export interface PopoverProps {
    children: React.ReactNode;
    open?: boolean;
    anchorEl: HTMLElement | null;
    onClose?: () => void;
    arrow?: boolean;
    allowFlip?: boolean;
    offset?: number[];
    placement?: PopoverPlacement;
}
