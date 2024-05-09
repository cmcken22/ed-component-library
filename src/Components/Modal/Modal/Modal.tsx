import { Dialog } from "@mui/material";
import cx from "classnames";
import { useCallback } from "react";
import { Icon } from "src/index";
import { IconVariant } from "../../Icon";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";
import { ModalProps } from "./Modal.types";

const Modal = ({
  id,
  className,
  sx,
  children,
  open,
  onClose,
  hideCloseIcon,
  hideBackdrop,
  disableBackdropClick,
  width,
  minWidth,
  maxWidth,
  disableEscapeKeyDown,
}: ModalProps) => {
  const handleClose = useCallback(
    (_, reason: string) => {
      if (disableBackdropClick && reason === "backdropClick") return;
      if (onClose) onClose();
    },
    [disableBackdropClick, onClose]
  );

  return (
    <Dialog
      id={id}
      open={open}
      onClose={handleClose}
      className={cx("Modal", {
        [className]: className,
      })}
      PaperProps={{
        sx: {
          width,
          minWidth,
          maxWidth,
          borderRadius: "4px",
          ...sx,
        },
      }}
      hideBackdrop={hideBackdrop}
      disableEscapeKeyDown={disableEscapeKeyDown}
      data-testid="Modal"
    >
      {!hideCloseIcon && (
        <Icon
          icon={IconVariant.Close}
          onClick={onClose}
          sx={{
            position: "absolute",
            top: "16px",
            right: "11px",
          }}
        />
      )}
      {children}
    </Dialog>
  );
};

Modal.defaultProps = {
  hideBackdrop: false,
  disableBackdropClick: false,
  maxWidth: "600px",
  minWidth: "400px",
} as Partial<ModalProps>;

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;
