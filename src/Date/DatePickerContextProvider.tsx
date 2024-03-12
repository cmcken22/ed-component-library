import { createContext, useCallback, useEffect, useMemo } from "react";
import { useLilius } from "use-lilius";

export const numberToMonth = (num: number) => {
  const monthMap = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  return monthMap?.[num];
};

export type DatePickerContext = {
  value?: Date | null | Date[];
  months: any;
  selected: Date[] | undefined;
  onSelect: (date: Date) => void;
  selectedDateStrings: string[] | undefined;
  viewNextMonth: () => void;
  viewPreviousMonth: () => void;
  viewing: Date | undefined;
  getDateSelected: (date: Date) => boolean | undefined;
  getDateInRange: (date: Date) => boolean | undefined;
  disableFuture?: boolean;
  disablePast?: boolean;
  currentDate?: Date;
};

const defaultContext: DatePickerContext = {
  value: undefined,
  months: [],
  selected: undefined,
  selectedDateStrings: undefined,
  onSelect: () => {},
  viewNextMonth: () => {},
  viewPreviousMonth: () => {},
  viewing: undefined,
  getDateSelected: () => false,
  getDateInRange: () => false,
  disableFuture: false,
  disablePast: false,
  currentDate: new Date(),
};

export const DatePickerContext =
  createContext<DatePickerContext>(defaultContext);

const DatePickerContextProvider = ({
  onSelect,
  numberOfMonths,
  value,
  children,
  disableFuture,
  disablePast,
  currentDate,
}) => {
  const {
    calendar,
    selected,
    viewNextMonth,
    viewPreviousMonth,
    select,
    setViewing,
  } = useLilius({
    numberOfMonths: numberOfMonths || 1,
  });

  useEffect(() => {
    if (currentDate) setViewing(currentDate);
  }, [currentDate]);

  useEffect(() => {
    if (value) setViewing(value);
    select(value, true);
  }, [value]);

  const selectedDateStrings = useMemo(() => {
    return selected?.map((date) => date?.toISOString());
  }, [selected]);

  const handelSelectSingleDate = useCallback(
    (date: Date) => {
      if (
        selectedDateStrings?.includes(date?.toISOString()) &&
        selectedDateStrings?.length === 1
      ) {
        if (onSelect) onSelect(null);
        select([], true);
        return;
      }
      if (onSelect) onSelect(date);
      select(date, true);
    },
    [select, selectedDateStrings, onSelect]
  );

  const getDateSelected = useCallback(
    (date: Date) => {
      if (!date || !selectedDateStrings?.length) return false;
      return selectedDateStrings?.includes(date?.toISOString());
    },
    [selectedDateStrings]
  );

  const context: DatePickerContext = useMemo(() => {
    const context: DatePickerContext = {
      months: calendar,
      selected,
      selectedDateStrings,
      onSelect: handelSelectSingleDate,
      viewNextMonth,
      viewPreviousMonth,
      viewing: new Date(),
      getDateSelected,
      getDateInRange: () => false,
      disableFuture,
      disablePast,
      currentDate,
    };
    return context;
  }, [
    calendar,
    selected,
    selectedDateStrings,
    handelSelectSingleDate,
    viewNextMonth,
    viewPreviousMonth,
    getDateSelected,
    disableFuture,
    disablePast,
    currentDate,
  ]);

  return (
    <DatePickerContext.Provider value={context}>
      {typeof children === "function" ? children(context) : children}
    </DatePickerContext.Provider>
  );
};

export default DatePickerContextProvider;
