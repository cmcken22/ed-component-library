import {
  createContext,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import { useLilius } from "use-lilius";
import { BaseCalendarProps } from "./BaseDatePicker.types";
import { nullFilter, sorteDates } from "./utils";

export type CalendarContextType = {
  // value?: Date | null | Date[];
  months: any;
  selected: Date[] | undefined;
  select: (date: Date | Date[], clear?: boolean) => void;
  // onSelect: (date: Date) => void;
  viewNextMonth: () => void;
  viewPreviousMonth: () => void;
  numberOfMonths?: number;
  viewing: Date | undefined;
  disableFuture?: boolean;
  disableCurrent?: boolean;
  disablePast?: boolean;
  dateDisabled?: (date: Date) => boolean;
  currentDate?: Date;
  range?: boolean;
  isSelected?: (date: Date) => boolean;
  inRange?: (date: Date, start?: Date, end?: Date) => boolean;
  hoveredDate?: Date | null;
  setHoveredDate?: (date: Date | null) => void;
  setViewing?: (date: Date) => void;
};

const defaultContext: CalendarContextType = {
  months: [],
  selected: undefined,
  select: () => {},
  viewNextMonth: () => {},
  viewPreviousMonth: () => {},
  numberOfMonths: 1,
  viewing: undefined,
  disableFuture: false,
  disableCurrent: false,
  disablePast: false,
  dateDisabled: () => false,
  currentDate: new Date(),
  range: false,
  isSelected: () => false,
  inRange: () => false,
  hoveredDate: null,
  setHoveredDate: () => {},
  setViewing: () => {},
};

export const CalendarContext =
  createContext<CalendarContextType>(defaultContext);

const CalendarContextProvider = forwardRef(
  (
    {
      numberOfMonths,
      children,
      disableFuture,
      disableCurrent,
      disablePast,
      dateDisabled,
      currentDate,
      range,
    }: BaseCalendarProps,
    ref: any
  ) => {
    const {
      calendar,
      selected,
      viewNextMonth,
      viewPreviousMonth,
      select,
      viewing,
      setViewing,
      isSelected,
      inRange,
    } = useLilius({
      numberOfMonths: numberOfMonths || 1,
    });
    const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

    const handleCheckInRange = useCallback(
      (date: Date, start?: Date, end?: Date) => {
        if (date && start && end) {
          return inRange(date, start, end);
        }
        if (selected?.length < 2) return false;
        const sortedValues = [...selected].filter(nullFilter).sort(sorteDates);
        if (sortedValues.length < 2) return false;
        return inRange(date, sortedValues[0], sortedValues[1]);
      },
      [selected, inRange]
    );

    // TODO: only expose certain methods
    useImperativeHandle(ref, () => ({ setViewing, getViewing: () => viewing }));

    return (
      <CalendarContext.Provider
        value={{
          months: calendar,
          selected,
          select,
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
          hoveredDate,
          setHoveredDate,
          setViewing,
          numberOfMonths,
        }}
      >
        {children}
      </CalendarContext.Provider>
    );
  }
);

export default CalendarContextProvider;
