import { Box } from "@mui/material";
import cx from "classnames";
import { useContext } from "react";
import { TEST_ID } from "src/enums";
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
      data-testid={TEST_ID.TAB_PANEL}
      {...a11yProps(tabValue)}
      {...other}
    >
      {value === tabValue ? children : null}
    </Box>
  );
};

TabPanel.displayName = "TabPanel";

TabPanel.defaultProps = {} as Partial<TabPanelProps>;

export default TabPanel;
