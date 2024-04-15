import { DrawerProps } from './Drawer.types';

declare const Drawer: {
    ({ id, className, sx, open, onClose, anchor, marginTop, width, title, children, footer, hideBackdrop, headerBorder, footerBorder, persistent, allowClose, displayHeader, }: DrawerProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<DrawerProps>;
};
export default Drawer;
