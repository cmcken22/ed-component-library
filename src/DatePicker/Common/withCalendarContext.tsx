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
        <Component {...rest} value={sanitizeValue(value)} onSelect={onSelect} />
      </CalendarContextProvider>
    );
  };

  WithCalendarContext.displayName = displayName;

  return WithCalendarContext;
};

export default withCalendarContext;
