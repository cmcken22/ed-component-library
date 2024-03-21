import { Box, styled } from "@mui/material";
import cx from "classnames";
import { useCallback, useContext, useMemo } from "react";
import Typography from "src/Typography";
import { FontWeight } from "src/theme/Typography";
import { shouldNotForwardProp } from "src/utils";
import { TabContext } from "../TabContext";
import { TabProps } from "./Tab.types";

const StyledBox = styled(Box, {
  shouldForwardProp: shouldNotForwardProp(["selected", "disabled"]),
  slot: "root",
})<{ selected?: boolean; disabled?: boolean }>(({
  theme,
  selected,
  disabled,
}) => {
  return {
    ...theme.typography.bodyXS,
    fontWeight: selected ? "bold" : "normal",
    color: theme.palette.text["main"],
    cursor: "pointer",
    paddingLeft: "2px",
    paddingRight: "2px",
    marginBottom: "4px",
    display: "flex",
    alignItems: "center",
    opacity: 1,
    ...(disabled && {
      opacity: 0.5,
    }),
  };
});

const Tab = ({
  id,
  className,
  sx,
  label,
  value,
  children,
  disabled,
}: TabProps) => {
  const { setTabValue, value: currentTabValue } = useContext(TabContext);

  const selected = useMemo(
    () => value === currentTabValue,
    [value, currentTabValue]
  );

  const handleTabClick = useCallback(() => {
    if (disabled) return;
    setTabValue(value);
  }, [setTabValue, value, disabled]);

  return (
    <StyledBox
      id={id}
      className={cx("Tab", {
        "Tab--selected": value === currentTabValue,
        [className]: className,
      })}
      onClick={handleTabClick}
      selected={selected}
      disabled={disabled}
      sx={sx}
    >
      {children ? (
        children
      ) : (
        <Typography
          variant="bodyXS"
          fontWeight={(selected ? "bold" : "normal") as FontWeight}
        >
          {label}
        </Typography>
      )}
    </StyledBox>
  );
};

Tab.defaultProps = {} as Partial<TabProps>;

export default Tab;
