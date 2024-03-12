import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Typography } from "..";
import { DatePickerContext } from "./DatePickerContextProvider";

const StyledBox = styled(Box, {
  // shouldForwardProp: (prop) => prop !== "src",
  slot: "root",
})<any>(({ theme, selected, inRange, isToday, disabled, hidden }) => {
  let backgroundColor = "white";
  let color = theme.palette.charcoal[100];
  if (selected) {
    backgroundColor = theme.palette.secondary.main;
    color = "white";
  }
  let borderStyles = {};
  if (isToday && !selected) {
    borderStyles = {
      border: "1px solid",
      borderRadius: "50%",
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
    backgroundColor,
    ...borderStyles,
  };
});

const Day = ({ day, month }: { day: Date; month: number }) => {
  const {
    onSelect,
    getDateSelected,
    getDateInRange,
    currentDate,
    disableFuture,
    disablePast,
  } = useContext(DatePickerContext);

  const dateSelected = getDateSelected(day);
  const dateInRange = getDateInRange ? getDateInRange(day) : false;
  const outOfMonth = day.getMonth() !== month;
  // const leftSelected = selected?.length > 1 && day === selected?.[0];
  // const rightSelected = selected?.length > 1 && day === selected?.[1];
  console.log("currentDate:", currentDate);
  const isToday =
    currentDate && currentDate?.toDateString() === day?.toDateString();
  const disabled =
    outOfMonth ||
    (disableFuture && day > currentDate) ||
    (disablePast && day < currentDate);

  if (isToday) {
    console.clear();
    console.log("day:", day);
    console.log("currentDate:", currentDate);
    console.log("test:", day < currentDate);
  }

  return (
    <StyledBox
      key={`${month}--${day.toISOString()}`}
      onClick={disabled ? undefined : () => onSelect(day)}
      isToday={isToday}
      selected={dateSelected}
      inRange={dateInRange}
      disabled={outOfMonth || disabled}
      hidden={outOfMonth}
    >
      <Typography variant="bodyXS" preventTextSelection>
        {new Date(day).getDate()}
      </Typography>
    </StyledBox>
  );
};

export default Day;
