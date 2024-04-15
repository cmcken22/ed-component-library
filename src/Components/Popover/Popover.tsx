import { Box, Popper, styled } from "@mui/material";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useConditionalDelay } from "src/Hooks";
import { PopoverProps } from "./Popover.types";

const StyledPopover = styled(Popper)(({ theme }) => ({
  ".arrow": {
    height: "10px",
    width: "10px",
  },
  '&[data-popper-placement*="top"] .arrow-container': {
    bottom: "-5px",
  },
  '&[data-popper-placement*="top"] .arrow': {
    background: "red",
    backgroundColor: "white",
    borderRight: `1px solid ${theme.palette.charcoal["20"]}`,
    borderBottom: `1px solid ${theme.palette.charcoal["20"]}`,
    borderBottomRightRadius: "2px",
    transform: "rotate(45deg) !important",
  },
  '&[data-popper-placement*="bottom"] .arrow-container': {
    top: "-5px",
  },
  '&[data-popper-placement*="bottom"] .arrow': {
    background: "red",
    backgroundColor: "white",
    borderLeft: `1px solid ${theme.palette.charcoal["20"]}`,
    borderTop: `1px solid ${theme.palette.charcoal["20"]}`,
    borderTopLeftRadius: "2px",
    transform: "rotate(45deg) !important",
  },
  '&[data-popper-placement*="left"] .arrow-container': {
    right: "-5px",
  },
  '&[data-popper-placement*="left"] .arrow': {
    background: "red",
    backgroundColor: "white",
    borderRight: `1px solid ${theme.palette.charcoal["20"]}`,
    borderTop: `1px solid ${theme.palette.charcoal["20"]}`,
    borderTopRightRadius: "2px",
    transform: "rotate(45deg) !important",
  },
  '&[data-popper-placement*="right"] .arrow-container': {
    left: "-5px",
  },
  '&[data-popper-placement*="right"] .arrow': {
    background: "red",
    backgroundColor: "white",
    borderLeft: `1px solid ${theme.palette.charcoal["20"]}`,
    borderBottom: `1px solid ${theme.palette.charcoal["20"]}`,
    borderBottomLeftRadius: "2px",
    transform: "rotate(45deg) !important",
  },
}));

const Popover = ({
  children,
  open: isOpen,
  anchorEl,
  onClose,
  arrow,
  allowFlip,
  placement,
  offset,
}: PopoverProps) => {
  const ref = useRef(null);
  const [arrowRef, setArrowRef] = useState(null);
  const open = useMemo(() => Boolean(anchorEl) && isOpen, [anchorEl, isOpen]);

  const listenDelay = useConditionalDelay(open, 100);

  const handleClickOutside = useCallback(
    (e: any) => {
      if (!listenDelay || !open) return;
      if (ref.current && !ref.current.contains(e.target)) {
        if (onClose) onClose();
      }
    },
    [onClose, open, listenDelay]
  );

  useEffect(() => {
    // use mouse down instead of click to handle outside click
    // important for components like the RangeFilter which has a slider
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <StyledPopover
      ref={ref}
      open={Boolean(open)}
      anchorEl={anchorEl}
      placement={placement}
      sx={{ background: "white" }}
      modifiers={[
        {
          name: "offset",
          options: {
            offset: offset || [0, 8],
          },
        },
        {
          name: "flip",
          enabled: allowFlip,
          options: {
            altBoundary: true,
            rootBoundary: "document",
          },
        },
        {
          name: "arrow",
          enabled: arrow,
          options: {
            element: arrowRef,
            x: 0.5,
          },
        },
      ]}
    >
      {arrow && (
        <Box component="span" className="arrow-container" ref={setArrowRef}>
          <Box className="arrow" />
        </Box>
      )}
      {children}
    </StyledPopover>
  );
};

Popover.defaultProps = {
  arrow: false,
  offset: [0, 8],
  allowFlip: true,
} as Partial<PopoverProps>;

export default Popover;
