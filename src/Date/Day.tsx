import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { hexToRGBA } from "src/utils";
import { Typography } from "..";
import { DatePickerContext } from "./DatePickerContextProvider";

const checkIsToday = (currentDate: Date, date: Date) => {
  // Given date string
  const currentDateString = currentDate.toISOString();
  var givenDateString = date.toISOString();

  // Create Date objects for the given date and current date
  var givenDate = new Date(givenDateString);
  var currentDate = new Date(currentDateString);

  // Get date parts (year, month, and day) of both dates
  var givenYear = givenDate.getFullYear();
  var givenMonth = givenDate.getMonth();
  var givenDay = givenDate.getDate();

  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth();
  var currentDay = currentDate.getDate();

  // Check if the given date falls within the current day
  var isToday =
    givenYear === currentYear &&
    givenMonth === currentMonth &&
    givenDay === currentDay;

  // console.log(isToday);
  return isToday;
};

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
  if (inRange) {
    backgroundColor = hexToRGBA(theme.palette.secondary.main, 0.05);
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
    // getDateSelected,
    inRange,
    // getDateInRange,
    currentDate,
    disableFuture,
    disablePast,
    isSelected,
  } = useContext(DatePickerContext);

  // const dateSelected = getDateSelected(day);
  const dateSelected = isSelected(day);
  const dateInRange = dateSelected ? false : inRange(day);
  const outOfMonth = day.getMonth() !== month;
  // const leftSelected = selected?.length > 1 && day === selected?.[0];
  // const rightSelected = selected?.length > 1 && day === selected?.[1];

  // console.log("currentDate:", currentDate);
  // const isToday = currentDate ? checkIsToday(currentDate, day) : false;
  const isToday =
    currentDate && currentDate?.toDateString() === day?.toDateString();
  // const isToday =
  //   currentDate && currentDate?.toISOString() === day?.toISOString();
  if (isToday) {
    console.log("currentDate:", currentDate?.toISOString());
    console.log("day:", day?.toISOString());
  }
  const disabled =
    outOfMonth ||
    (disableFuture && day > currentDate) ||
    (disablePast && !isToday && day < currentDate);

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
