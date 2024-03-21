import { Box, styled } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import cx from "classnames";
import { useMemo } from "react";
import { Icon, Typography } from "src";
import { shouldNotForwardProp, sizeFormat } from "src/utils";
import { DrawerProps } from "./Drawer.types";

const DEFAULT_DRWAWER_WIDTH = 368;

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: shouldNotForwardProp([
    "hideBackdrop",
    "persistent",
    "marginTop",
    "drawerWidth",
  ]),
  slot: "root",
})<{
  hideBackdrop?: boolean;
  persistent?: boolean;
  marginTop?: string | number;
  drawerWidth?: string | number;
}>(({ hideBackdrop, persistent, marginTop, drawerWidth }) => ({
  ".MuiDrawer-root, .MuiBackdrop-root": {
    marginTop: sizeFormat(marginTop),
    ...(hideBackdrop && { backgroundColor: "transparent" }),
    ...(persistent && { pointerEvents: "none" }),
  },
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    marginTop: sizeFormat(marginTop),
    width: drawerWidth,
  },
}));

const DrawerContent = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
}));

const DrawerHeader = styled(Box, {
  shouldForwardProp: shouldNotForwardProp(["displayBorder"]),
  slot: "root",
})<{ displayBorder?: boolean }>(({ theme, displayBorder }) => ({
  padding: "18px 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexShrink: 0,
  borderBottom: displayBorder ? "1px solid" : "none",
  borderColor: theme.palette.charcoal["20"],
}));

const DrawerBody = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  flexGrow: 1,
  overflow: "auto",
}));

const DrawerFooter = styled(Box, {
  shouldForwardProp: shouldNotForwardProp(["displayBorder"]),
  slot: "root",
})<{ displayBorder?: boolean }>(({ theme, displayBorder }) => ({
  borderTop: displayBorder ? "1px solid" : "none",
  borderColor: theme.palette.charcoal["20"],
  padding: "18px 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexShrink: 0,
}));

const Drawer = ({
  id,
  className,
  sx,
  open,
  onClose,
  anchor,
  marginTop,
  width,
  title,
  children,
  footer,
  hideBackdrop,
  headerBorder,
  footerBorder,
  persistent,
}: DrawerProps) => {
  const drawerWidth = useMemo(() => {
    if (width) return width;
    if (anchor === "bottom" || anchor === "top") {
      return "100%";
    }
    return width ? sizeFormat(drawerWidth) : DEFAULT_DRWAWER_WIDTH;
  }, [anchor, width]);

  return (
    <StyledDrawer
      id={id}
      className={cx("Drawer", {
        [className]: className,
      })}
      sx={sx}
      data-testid="Drawer"
      open={open}
      onClose={onClose}
      anchor={anchor}
      marginTop={marginTop}
      hideBackdrop={hideBackdrop}
      persistent={persistent}
      drawerWidth={drawerWidth}
    >
      <DrawerContent className="Drawer__content">
        <DrawerHeader className="Drawer__header" displayBorder={headerBorder}>
          <Typography variant="h5">{title}</Typography>
          <Icon icon="Close" onClick={onClose} />
        </DrawerHeader>
        <DrawerBody className="Drawer__body">{children}</DrawerBody>
        {footer && (
          <DrawerFooter className="Drawer__footer" displayBorder={footerBorder}>
            {footer}
          </DrawerFooter>
        )}
      </DrawerContent>
    </StyledDrawer>
  );
};

Drawer.defaultProps = {
  anchor: "right",
  headerBorder: true,
  footerBorder: true,
  hideBackdrop: true,
  persistent: false,
} as Partial<DrawerProps>;

export default Drawer;
