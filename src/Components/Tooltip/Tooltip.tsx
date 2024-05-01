import { Box, Stack } from "@mui/material";
import MuiTooltip from "@mui/material/Tooltip";
import cx from "classnames";
import { useCallback, useState } from "react";
import Icon, { IconVariant } from "../Icon";
import Typography from "../Typography";
import { TooltipProps } from "./Tooltip.types";

const Tooltip = ({
  id,
  className,
  sx,
  title,
  content,
  children,
  open,
  defaultOpen,
  allowClose,
  persistent,
  onOpen,
  onClose,
  variant,
  arrow,
  placement,
  render,
  footer,
  enterDelay,
  enterNextDelay,
  leaveDelay,
  disabled,
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(open || defaultOpen || false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    if (onClose) onClose();
  }, [setIsOpen, onClose]);

  const handleMouseEnter = useCallback(() => {
    if (onOpen) onOpen();
    setIsOpen(true);
  }, [setIsOpen, onOpen]);

  const handleMouseLeave = useCallback(() => {
    if (persistent) return;
    setIsOpen(false);
    if (onClose) onClose();
  }, [setIsOpen, persistent, onClose]);

  const renderCloseIcon = useCallback(() => {
    if (!allowClose) return null;
    return (
      <Icon
        sx={{
          position: "absolute",
          top: "2px",
          right: "0",
          cursor: "pointer",
        }}
        className="Tooltip__close-icon"
        icon={IconVariant.Close}
        size={16}
        onClick={handleClose}
      />
    );
  }, [allowClose, handleClose]);

  const renderTitle = useCallback(() => {
    if (!title) return null;
    return (
      <Box
        sx={{
          marginRight: allowClose ? "24px" : "0px",
        }}
      >
        {typeof title !== "string" ? (
          title
        ) : (
          <Typography variant="bodyXS" className="Tooltip__title">
            {title}
          </Typography>
        )}
      </Box>
    );
  }, [title, allowClose]);

  const renderContent = useCallback(() => {
    if (!content) return null;
    if (typeof content !== "string") return content;
    return (
      <Typography variant="bodyXS" className="Tooltip__content">
        {content}
      </Typography>
    );
  }, [content]);

  const renderFooter = useCallback(() => {
    if (!footer) return null;
    return footer;
  }, [footer]);

  const renderTooltip = useCallback(() => {
    if (render) return render();
    const Title = renderTitle();
    const Content = renderContent();
    const Footer = renderFooter();

    if (!Title && !Content && !Footer) {
      return null;
    }

    return (
      <Stack sx={{ position: "relative" }} gap={1}>
        {renderCloseIcon()}
        {Title}
        {Content}
        {Footer}
      </Stack>
    );
  }, [
    disabled,
    render,
    renderCloseIcon,
    renderTitle,
    renderContent,
    renderFooter,
  ]);

  return (
    <MuiTooltip
      id={id}
      className={cx("Tooltip", className)}
      sx={sx}
      onOpen={handleMouseEnter}
      onClose={handleMouseLeave}
      open={disabled ? false : Boolean(isOpen || open)}
      // @ts-ignore
      variant={variant}
      arrow={arrow}
      placement={placement}
      title={renderTooltip()}
      enterDelay={enterDelay}
      enterNextDelay={enterNextDelay}
      leaveDelay={leaveDelay}
    >
      {children}
    </MuiTooltip>
  );
};

Tooltip.defaultProps = {
  placement: "top",
  variant: "dark",
  arrow: true,
  enterDelay: 0,
  enterNextDelay: 0,
  leaveDelay: 0,
  disabled: false,
  allowClose: false,
  persistent: false,
} as Partial<TooltipProps>;

export default Tooltip;
