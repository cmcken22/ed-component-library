import { Box } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import cx from "classnames";
import { useMemo } from "react";
import Tabs from "src/Tabs";
import { sizeFormat } from "src/utils";
import { Icon, Typography } from "..";
import { DrawerProps } from "./Drawer.types";

const DEFAULT_DRWAWER_WIDTH = 368;

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
}: DrawerProps) => {
  const drawerWidth = useMemo(() => {
    if (width) return width;
    if (anchor === "bottom" || anchor === "top") {
      return "100%";
    }
    return width ? sizeFormat(drawerWidth) : DEFAULT_DRWAWER_WIDTH;
  }, [anchor, width]);

  return (
    <Box
      id={id}
      className={cx("Drawer", {
        [className]: className,
      })}
      sx={sx}
      data-testid="Drawer"
    >
      <MuiDrawer
        open={open}
        onClose={onClose}
        anchor={anchor}
        sx={{
          ".MuiDrawer-root, .MuiBackdrop-root": {
            marginTop: sizeFormat(marginTop),
          },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            marginTop: sizeFormat(marginTop),
            width: drawerWidth,
          },
        }}
        // hideBackdrop
      >
        <Box
          className="Drawer-content"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <Box
            sx={{
              padding: "18px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // background: "red",
              flexShrink: 0,
              // mb: "24px",
            }}
          >
            <Typography variant="h5">{title}</Typography>
            <Icon icon="Close" onClick={onClose} />
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              // background: "rgba(255, 0, 255, 0.4)",
              flexGrow: 1,
              overflow: "auto",
            }}
          >
            <Tabs>
              <Tabs.Panel label="Tab 1">
                <Box p={2}>Tab 1 Content</Box>
              </Tabs.Panel>
              <Tabs.Panel label="Tab 2">
                <Box p={2}>
                  Tab 2 Content
                  {Array.from({ length: 100 }, (_, i) => i + 1).map((i) => (
                    <Box key={`drawer-content--${i}`}>{i}</Box>
                  ))}
                </Box>
              </Tabs.Panel>
            </Tabs>
          </Box>
          {/* <Box
            sx={{
              padding: "18px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // background: "blue",
              flexShrink: 0,
              height: "300px",
            }}
          >
            FOOTER
          </Box> */}
        </Box>
      </MuiDrawer>
    </Box>
  );
};

Drawer.defaultProps = {
  anchor: "right",
} as Partial<DrawerProps>;

export default Drawer;
