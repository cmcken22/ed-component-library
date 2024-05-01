import { TooltipProps } from './Tooltip.types';

declare const Tooltip: {
    ({ id, className, sx, title, content, children, open, defaultOpen, allowClose, persistent, onOpen, onClose, variant, arrow, placement, render, footer, enterDelay, enterNextDelay, leaveDelay, disabled, fullWidth, }: TooltipProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<TooltipProps>;
};
export default Tooltip;
