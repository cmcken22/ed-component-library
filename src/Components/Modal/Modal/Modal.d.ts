import { ModalProps } from './Modal.types';

declare const Modal: {
    ({ id, className, sx, children, open, onClose, hideCloseIcon, hideBackdrop, disableBackdropClick, width, minWidth, maxWidth, disableEscapeKeyDown, }: ModalProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<ModalProps>;
    Header: {
        ({ id, className, title, subtitle, children }: import('../Header/Header.types').HeaderProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: Partial<import('../Header/Header.types').HeaderProps>;
    };
    Content: {
        ({ id, className, children, sx, height, maxHeight, minHeight, }: import('../Content/Content.types').ContentProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: Partial<import('../Content/Content.types').ContentProps>;
    };
    Footer: {
        ({ id, className, sx, children, onAccept, onCancel, acceptBtn, acceptBtnText, acceptBtnProps, cancelBtn, cancelBtnText, cancelBtnProps, }: import('../Footer/Footer.types').FooterProps): import("react/jsx-runtime").JSX.Element;
        defaultProps: Partial<import('../Footer/Footer.types').FooterProps>;
    };
};
export default Modal;
