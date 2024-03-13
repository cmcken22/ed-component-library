import { createContext, useCallback, useEffect, useMemo } from "react";
import { useStateWithPrevious } from "src/Hooks/useStateWithPrevious";
import { useLilius } from "use-lilius";
import {
  checkDateInArray,
  detectUpdatedIndex,
  getMonth,
  getYear,
  isValidDate,
  nullFilter,
  sorteDates,
  subtractMonths,
} from "./utils";

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

const DatePickerContextProvider = ({
  onSelect,
  numberOfMonths,
  value: passedValue,
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
  const [prevValue, value, setValue] = useStateWithPrevious(passedValue);

  useEffect(() => {
    setValue(passedValue);
  }, [passedValue]);

  // current date is an object, so it will always be a new reference
  // don't put in the dependency array, only check once on mount
  useEffect(() => {
    if (currentDate) setViewing(currentDate);
    else viewToday();
  }, []);

  const handleUpdateViewing = useCallback(
    (value: Date) => {
      if (!value) return;
      if (Array.isArray(value)) {
        const updatedIndex = detectUpdatedIndex(prevValue, value);
        if (updatedIndex !== -1) {
          // if the months and years are the same, then no need to update the viewing date
          // unless the current viewing date is outside the month / year
          if (
            getMonth(value?.[0]) === getMonth(value?.[1]) &&
            getYear(value?.[0]) === getYear(value?.[1])
          ) {
            // if they are the same but the viewing month is different, then update the viewing month
            const viewingMonth = getMonth(viewing);
            if (viewingMonth !== getMonth(value?.[0])) {
              setViewing(value?.[0]);
            }
            return;
          }
          const date = value?.[updatedIndex];
          if (!isValidDate(date)) return;
          const dateInPrevMonth = subtractMonths(date, updatedIndex);
          setViewing(dateInPrevMonth);
        } else {
          if (isValidDate(value?.[0])) {
            setViewing(value?.[0]);
          } else if (isValidDate(value?.[1])) {
            setViewing(value?.[1]);
          }
        }
        return;
      }
      setViewing(value);
    },
    [prevValue, setViewing, viewing]
  );

  useEffect(() => {
    handleUpdateViewing(value);
  }, [value]);

  useEffect(() => {
    select(value, true);
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
      console.clear();
      console.log("nextSelected:", nextSelected);
      // return;

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
