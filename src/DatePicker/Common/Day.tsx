import { Box, styled } from "@mui/material";
import { useCallback, useContext, useMemo } from "react";
import { hexToRGBA, shouldNotForwardProp } from "src/utils";
import { Typography } from "../..";
import { DatePickerContext } from "./DatePickerContextProvider";
import { isValidDate } from "./utils";

const StyledBox = styled(Box, {
  shouldForwardProp: shouldNotForwardProp([
    "selected",
    "inRange",
    "inPotentialRange",
    "hidden",
    "leftRange",
    "rightRange",
  ]),
  slot: "root",
})<any>(({
  theme,
  selected,
  inRange,
  inPotentialRange,
  disabled,
  hidden,
  leftRange,
  rightRange,
}) => {
  let backgroundColor = "white";
  let color = theme.palette.charcoal[100];
  if (selected) {
    backgroundColor = theme.palette.secondary.main;
    color = "white";
  }
  if (inRange) {
    backgroundColor = hexToRGBA(theme.palette.secondary.main, 0.05);
  }
  // TODO: maybe we will change this colour
  if (inPotentialRange) {
    backgroundColor = hexToRGBA(theme.palette.secondary.main, 0.05);
  }
  let borderStyles = {};
  if (leftRange) {
    borderStyles = {
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
    };
  }
  if (rightRange) {
    borderStyles = {
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
    };
  }
  let opacity = 1;
  if (disabled) {
    opacity = 0.5;
  }
  if (hidden) {
    opacity = 0;
  }

  return {
    cursor: disabled || hidden ? "default" : "pointer",
    opacity,
    height: "30px",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color,
    position: "relative",
    backgroundColor,
    ...borderStyles,
  };
});

const Day = ({
  day,
  month,
  onSelect,
}: {
  day: Date;
  month: number;
  onSelect: any;
}) => {
  const {
    selected,
    // onSelect,
    inRange,
    currentDate,
    disableFuture,
    disableCurrent,
    disablePast,
    dateDisabled,
    isSelected,
    range,
    hoveredDate,
    setHoveredDate,
  } = useContext(DatePickerContext);

  const validSelectedDates = useMemo(() => {
    const values = [...(selected || [])];
    return values.filter((date) => isValidDate(date));
  }, [selected]);

  const dateSelected = useMemo(() => isSelected(day), [day, isSelected]);
  const dateInRange = useMemo(() => {
    return dateSelected ? false : inRange(day);
  }, [day, inRange, dateSelected]);
  const outOfMonth = useMemo(() => day.getMonth() !== month, [day, month]);
  const isToday = useMemo(() => {
    return currentDate && currentDate?.toDateString() === day?.toDateString();
  }, [currentDate, day]);

  const disabled = useMemo(() => {
    let disabled = false;
    if (outOfMonth) disabled = true;
    if (disableFuture && day > currentDate) disabled = true;
    if (disablePast && !isToday && day < currentDate) disabled = true;
    if (disableCurrent && isToday) disabled = true;
    if (dateDisabled && dateDisabled(day)) disabled = true;
    return disabled;
  }, [
    outOfMonth,
    disableFuture,
    currentDate,
    disablePast,
    isToday,
    disableCurrent,
    dateDisabled,
  ]);

  const [leftRange, rightRange] = useMemo(() => {
    let leftRange = false;
    let rightRange = false;
    if (range && validSelectedDates?.length === 2) {
      const values = [...(validSelectedDates || [])];
      const [start, end] = values.sort((a, b) => a.getTime() - b.getTime());
      if (selected?.length === 2) {
        if (day?.getTime() === start.getTime()) leftRange = true;
        if (day?.getTime() === end?.getTime()) rightRange = true;
      }
    }
    return [leftRange, rightRange];
  }, [range, validSelectedDates]);

  const dateInPotentialRange = useMemo(() => {
    if (!range || !hoveredDate) return false;
    if (dateSelected || disabled) return false;
    if (validSelectedDates?.length !== 1) return false;
    const values = [...(validSelectedDates || []), hoveredDate];
    const [start, end] = values.sort((a, b) => a.getTime() - b.getTime());
    if (inRange(day, start, end)) {
      return true;
    }
    return false;
  }, [
    hoveredDate,
    validSelectedDates,
    dateSelected,
    disabled,
    range,
    day,
    inRange,
  ]);

  const handleMouseEnter = useCallback(
    (date: Date) => {
      if (!range || disabled) return;
      setHoveredDate(date);
    },
    [setHoveredDate, range, disabled]
  );

  const handleMouseLeave = useCallback(() => {
    if (!range || disabled) return;
    setHoveredDate(null);
  }, [setHoveredDate, range, disabled]);

  const handleSelect = useCallback(
    (day: Date) => {
      if (disabled) return;
      if (onSelect) onSelect(day);
    },
    [disabled, onSelect]
  );

  return (
    <StyledBox
      key={`${month}--${day.toISOString()}`}
      onClick={() => handleSelect(day)}
      className="day"
      selected={dateSelected}
      inRange={dateInRange}
      inPotentialRange={dateInPotentialRange}
      disabled={outOfMonth || disabled}
      hidden={outOfMonth}
      leftRange={leftRange}
      rightRange={rightRange}
      onMouseEnter={() => handleMouseEnter(day)}
      onMouseLeave={handleMouseLeave}
      data-test-outofmonth={outOfMonth}
    >
      {isToday && !dateSelected && (
        <Box
          className="today-indicator"
          sx={{
            height: "100%",
            width: "100%",
            borderRadius: "50%",
            position: "absolute",
            border: "1px solid",
            borderColor: "primary.main",
            pointerEvents: "none",
          }}
        />
      )}
      <Typography variant="bodyXS" preventTextSelection>
        {new Date(day).getDate()}
      </Typography>
    </StyledBox>
  );
};

export default Day;
