import { Tab as MuiTab, styled } from "@mui/material";
import cx from "classnames";
import { useContext } from "react";
import { TabContext } from "../TabContext";
import { TabProps } from "./Tab.types";

const StyledTab = styled(MuiTab, {
  shouldForwardProp: (prop) => prop !== "selected",
  slot: "Root",
})<{ selected?: boolean }>(({ theme, selected }) => {
  return {
    ...theme.typography.bodyXS,
    fontWeight: selected ? "bold" : "normal",
    color: theme.palette.text["main"],
    opacity: 1,
  };
});

const Tab = ({ id, className, sx, label, value }: TabProps) => {
  const { setTabValue, value: currentTabValue } = useContext(TabContext);

  return (
    <StyledTab
      id={id}
      className={cx("Tab", {
        "Tab--selected": value === currentTabValue,
        [className]: className,
      })}
      selected={value === currentTabValue}
      value={value}
      sx={sx}
      label={label}
      onClick={() => setTabValue(value)}
    />
  );
};

Tab.defaultProps = {} as Partial<TabProps>;

export default Tab;
