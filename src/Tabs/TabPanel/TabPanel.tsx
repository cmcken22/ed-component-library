import { Box } from "@mui/material";
import cx from "classnames";
import { useContext } from "react";
import { TabContext } from "../TabContext";
import { TabPanelProps } from "./TabPanel.types";

const a11yProps = (index: string | number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-labelledby": `simple-tabpanel-${index}`,
  };
};

const TabPanel = ({
  id,
  className,
  sx,
  children,
  tabValue,
  ...other
}: TabPanelProps) => {
  const { value } = useContext(TabContext);
  return (
    <Box
      id={id}
      className={cx("TabPanel", {
        [className]: className,
      })}
      sx={sx}
      role="tabpanel"
      hidden={value !== tabValue}
      {...a11yProps(tabValue)}
      {...other}
    >
      {value === tabValue ? children : null}
    </Box>
  );
};

TabPanel.defaultProps = {} as Partial<TabPanelProps>;

export default TabPanel;
