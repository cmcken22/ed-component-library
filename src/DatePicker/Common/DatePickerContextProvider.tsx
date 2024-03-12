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
  viewNextMonth: () => void;
  viewPreviousMonth: () => void;
  viewing: Date | undefined;
  disableFuture?: boolean;
  disableCurrent?: boolean;
  disablePast?: boolean;
  dateDisabled?: (date: Date) => boolean;
  currentDate?: Date;
  range?: boolean;
  isSelected?: (date: Date) => boolean;
  inRange?: (date: Date) => boolean;
};

const defaultContext: DatePickerContext = {
  value: undefined,
  months: [],
  selected: undefined,
  onSelect: () => {},
  viewNextMonth: () => {},
  viewPreviousMonth: () => {},
  viewing: undefined,
  disableFuture: false,
  disableCurrent: false,
  disablePast: false,
  dateDisabled: () => false,
  currentDate: new Date(),
  range: false,
  isSelected: () => false,
  inRange: () => false,
};

export const DatePickerContext =
  createContext<DatePickerContext>(defaultContext);

const checkDateInArray = (date: Date, dates: Date[]) => {
  return dates.some((d) => d.getTime() === date.getTime());
};

const nullFilter = (date: Date | null) => date !== null;
const sorteDates = (d1: Date, d2: Date) => d1.getTime() - d2.getTime();

const DatePickerContextProvider = ({
  onSelect,
  numberOfMonths,
  value,
  children,
  disableFuture,
  disableCurrent,
  disablePast,
  dateDisabled,
  currentDate,
  range,
}) => {
  const {
    calendar,
    selected,
    viewNextMonth,
    viewPreviousMonth,
    select,
    viewing,
    setViewing,
    viewToday,
    isSelected,
    inRange,
  } = useLilius({
    numberOfMonths: numberOfMonths || 1,
  });

  useEffect(() => {
    if (currentDate) setViewing(currentDate);
    else viewToday();
  }, [currentDate]);

  useEffect(() => {
    select(value, true);
    if (value) {
      if (Array.isArray(value)) {
        // @ts-ignore
        const isDateValid = value?.[0] instanceof Date && !isNaN(value?.[0]);
        if (value?.length === 1) {
          if (isDateValid) setViewing(value?.[0]);
        }
      } else {
        setViewing(value);
      }
    }
  }, [value]);

  const handelSelectSingleDate = useCallback(
    (date: Date) => {
      if (isSelected(date)) {
        if (onSelect) onSelect(null);
        select([], true);
        return;
      }
      if (onSelect) onSelect(date);
      select(date, true);
    },
    [select, isSelected, onSelect]
  );

  const handelSelectDateRange = useCallback(
    (date: Date) => {
      // TODO: prevent unselecting the min date if the max date is selected
      let nextSelected = [...selected]?.filter(nullFilter).sort(sorteDates);

      if (checkDateInArray(date, nextSelected)) {
        nextSelected = nextSelected.filter(
          (d) => d?.getTime() !== date?.getTime()
        );
        select(nextSelected, true);
        if (onSelect) onSelect(nextSelected);
        return;
      }

      if (nextSelected?.length < 2) {
        nextSelected.push(date);
        nextSelected.sort(sorteDates);
        select(nextSelected, true);
        if (onSelect) onSelect(nextSelected);
        return;
      }
      const smallest = nextSelected?.[0];
      const largest = nextSelected?.[1];

      if (date === smallest) {
        select([largest], true);
        if (onSelect) onSelect([largest]);
        return;
      }
      if (date === largest) {
        select([smallest], true);
        if (onSelect) onSelect([smallest]);
        return;
      }

      if (date < smallest) {
        select([date, largest], true);
        if (onSelect) onSelect([smallest, date]);
        return;
      }
      select([smallest, date], true);
      if (onSelect) onSelect([smallest, date]);
      return;
    },
    [select, onSelect, selected]
  );

  const handleCheckInRange = useCallback(
    (date: Date) => {
      if (selected?.length < 2) return false;
      const sortedValues = [...selected].sort(sorteDates);
      return inRange(date, sortedValues[0], sortedValues[1]);
    },
    [selected, inRange]
  );

  const context: DatePickerContext = useMemo(() => {
    const context: DatePickerContext = {
      months: calendar,
      selected,
      onSelect: range ? handelSelectDateRange : handelSelectSingleDate,
      viewNextMonth,
      viewPreviousMonth,
      viewing,
      disableFuture,
      disablePast,
      currentDate: currentDate,
      range,
      inRange: handleCheckInRange,
      isSelected,
      disableCurrent,
      dateDisabled,
    };
    return context;
  }, [
    calendar,
    selected,
    viewing,
    currentDate,
    handelSelectSingleDate,
    handelSelectDateRange,
    viewNextMonth,
    viewPreviousMonth,
    disableFuture,
    disablePast,
    range,
    handleCheckInRange,
    isSelected,
    disableCurrent,
    dateDisabled,
  ]);

  return (
    <DatePickerContext.Provider value={context}>
      {typeof children === "function" ? children(context) : children}
    </DatePickerContext.Provider>
  );
};

export default DatePickerContextProvider;
