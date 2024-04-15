import { RangeFilterControlProps } from '..';

export interface RangeFilterModalProps extends RangeFilterControlProps {
    open?: boolean;
    anchorEl?: HTMLElement | null;
    onClose?: () => void;
    placement?: "auto-end" | "auto-start" | "auto" | "bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top";
}
