import { Box, styled } from "@mui/material";
import { FC } from "react";
import { BaseCalendarProps } from "./BaseDatePicker.types";
import CalendarContextProvider from "./CalendarContextProvider";
import { convertDateToGMT, formatDateRange } from "./utils";

const sanitizeValue = (value: Date | Date[] | null) => {
  if (Array.isArray(value)) {
    return formatDateRange(value);
  }
  return convertDateToGMT(value);
};

const Wrapper = styled(Box, {
  slot: "root",
})<any>(({ theme }) => {
  return {
    backgroundColor: theme.palette.common.white,
    border: "1px solid",
    bgcolor: "background.paper",
    borderColor: theme.palette.charcoal["20"],
    borderRadius: "2px",
  };
});

const withCalendarContext = <T extends BaseCalendarProps>(
  Component,
  displayName: string,
  options: { range: boolean }
): FC<T> => {
  const WithCalendarContext = (props: T) => {
    const {
      value,
      onSelect,
      disableFuture,
      disableCurrent,
      disablePast,
      dateDisabled,
      currentDate,
      numberOfMonths,
      ...rest
    } = props;
    return (
      <CalendarContextProvider
        disableFuture={disableFuture}
        disableCurrent={disableCurrent}
        disablePast={disablePast}
        dateDisabled={dateDisabled}
        currentDate={currentDate}
        numberOfMonths={numberOfMonths}
        {...options}
      >
        <Wrapper>
          <Component
            {...rest}
            value={sanitizeValue(value)}
            onSelect={onSelect}
          />
        </Wrapper>
      </CalendarContextProvider>
    );
  };

  WithCalendarContext.displayName = displayName;

  return WithCalendarContext;
};

export default withCalendarContext;
