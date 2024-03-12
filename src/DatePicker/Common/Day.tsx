import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { hexToRGBA } from "src/utils";
import { Typography } from "../..";
import { DatePickerContext } from "./DatePickerContextProvider";

const StyledBox = styled(Box, {
  // shouldForwardProp: (prop) => prop !== "src",
  slot: "root",
})<any>(
  ({ theme, selected, inRange, disabled, hidden, leftRange, rightRange }) => {
    let backgroundColor = "white";
    let color = theme.palette.charcoal[100];
    if (selected) {
      backgroundColor = theme.palette.secondary.main;
      color = "white";
    }
    if (inRange) {
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
  }
);

const Day = ({ day, month }: { day: Date; month: number }) => {
  const {
    selected,
    onSelect,
    inRange,
    currentDate,
    disableFuture,
    disableCurrent,
    disablePast,
    dateDisabled,
    isSelected,
    range,
  } = useContext(DatePickerContext);

  const dateSelected = isSelected(day);
  const dateInRange = dateSelected ? false : inRange(day);
  const outOfMonth = day.getMonth() !== month;
  const isToday =
    currentDate && currentDate?.toDateString() === day?.toDateString();

  let disabled = false;
  if (outOfMonth) disabled = true;
  if (disableFuture && day > currentDate) disabled = true;
  if (disablePast && !isToday && day < currentDate) disabled = true;
  if (disableCurrent) disabled = true;
  if (dateDisabled && dateDisabled(day)) disabled = true;

  let leftRange = false;
  let rightRange = false;
  if (range && selected?.length === 2) {
    const values = [...(selected || [])];
    const [start, end] = values.sort((a, b) => a.getTime() - b.getTime());
    if (selected?.length === 2) {
      if (day?.getTime() === start.getTime()) leftRange = true;
      if (day?.getTime() === end?.getTime()) rightRange = true;
    }
  }

  return (
    <StyledBox
      key={`${month}--${day.toISOString()}`}
      onClick={disabled ? undefined : () => onSelect(day)}
      selected={dateSelected}
      inRange={dateInRange}
      disabled={outOfMonth || disabled}
      hidden={outOfMonth}
      leftRange={leftRange}
      rightRange={rightRange}
    >
      {isToday && !dateSelected && (
        <Box
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
