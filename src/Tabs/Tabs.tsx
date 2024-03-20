import { Box, Tabs as MuiTabs, styled } from "@mui/material";
import cx from "classnames";
import { Children, cloneElement, useCallback, useContext } from "react";
import { sizeFormat } from "src/utils";
import { TabsProps } from ".";
import { TabContext } from "./TabContext";

const BottomBorder = styled(Box)(({ theme }) => ({
  position: "absolute",
  height: "1px",
  width: "100%",
  background: theme.palette.charcoal["20"],
  bottom: "0.5px",
  zIndex: -1,
}));

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Tabs = ({
  id,
  className,
  sx,
  children,
  onTabChange,
  gutter,
  hideBottomBorder,
}: TabsProps) => {
  const { value } = useContext(TabContext);

  const handleChange = useCallback(
    (_, nextIndex: number) => {
      if (onTabChange) onTabChange(nextIndex);
    },
    [onTabChange]
  );

  return (
    <Box
      id={id}
      className={cx("Tabs", {
        [className]: className,
      })}
      sx={{ width: "100%", position: "relative", ...sx }}
    >
      <MuiTabs
        value={value}
        onChange={handleChange}
        sx={{
          px: sizeFormat(gutter),
        }}
      >
        {Children.map(children, (child: any) => {
          const value = child.props.value;
          return cloneElement(child, { ...a11yProps(value), tabIndex: 0 });
        })}
      </MuiTabs>
      {!hideBottomBorder && <BottomBorder className="Tabs__bottom-border" />}
    </Box>
  );
};

Tabs.defaultProps = {
  gutter: 0,
} as Partial<TabsProps>;

export default Tabs;
