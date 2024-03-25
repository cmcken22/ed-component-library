import isEqual from "lodash.isequal";
import { useCallback, useContext, useEffect, useRef } from "react";
import Calendar from "src/DatePicker/Common/Calendar";
import withCalendarContext from "src/DatePicker/Common/withCalendarContext";
import { CalendarContext } from "../../Common";
import {
  checkDateInArray,
  findDiffIndex,
  nullFilter,
  numberOfMonthsBetween,
  sorteDates,
  subtractMonths,
} from "../../Common/utils";
import {
  RangePickerCalendarCompProps,
  RangePickerCalendarProps,
} from "./RangePickerCalendar.types";

const RangePickerCalendarComp = ({
  value,
  onSelect,
}: RangePickerCalendarCompProps) => {
  const {
    months,
    select,
    selected,
    setViewing,
    currentDate,
    numberOfMonths,
    viewing,
  } = useContext(CalendarContext);

  // on mount
  useEffect(() => {
    if (Array.isArray(value) && value.length > 0) {
      const filteredValues = [...value].filter(nullFilter).sort(sorteDates);
      if (filteredValues?.[0]) {
        // if we can fit the current date on the screen
        // then we should show the current date
        let monthDiff = numberOfMonthsBetween(filteredValues?.[0], currentDate);
        if (!isNaN(monthDiff)) monthDiff = Math.abs(monthDiff);
        if (monthDiff < numberOfMonths) {
          setViewing(currentDate);
          return;
        }
        setViewing(filteredValues?.[0]);
        return;
      }
    }
    setViewing(currentDate);
  }, []);

  const prevValue = useRef<Date[]>(value);

  const setDateInCalendarView = useCallback(
    (date: Date, viewing: Date) => {
      const monthDiff = numberOfMonthsBetween(date, viewing);
      if (monthDiff >= 0 && monthDiff < numberOfMonths) {
        return;
      }
      if (monthDiff > 0) {
        const prevMonth = subtractMonths(date, numberOfMonths - 1);
        setViewing(prevMonth);
        return;
      }
      setViewing(date);
    },
    [setViewing]
  );

  const handleUpdateView = useCallback(
    (value: Date[]) => {
      if (isEqual(prevValue.current, value)) return;
      const diffIndex = findDiffIndex(prevValue.current, value);
      prevValue.current = value;

      const d1 = value?.[0];
      const d2 = value?.[1];

      if (d1 && d2) {
        const monthDiff1 = numberOfMonthsBetween(d1, viewing);
        const monthDiff2 = numberOfMonthsBetween(d2, viewing);

        let count = 0;
        if (monthDiff1 >= 0 && monthDiff1 < numberOfMonths) {
          count++;
        }
        if (monthDiff2 >= 0 && monthDiff2 < numberOfMonths) {
          count++;
        }
        if (count === 2) {
          return;
        }

        // can they both fit in the range?
        const monthDiffRange = numberOfMonthsBetween(d1, d2, true);
        if (monthDiffRange < numberOfMonths) {
          const smallest = [...value]?.sort(sorteDates)?.[0];
          setViewing(smallest);
          return;
        }

        const updatedDate = diffIndex === 0 ? d1 : d2;
        const diff = diffIndex === 0 ? monthDiff1 : monthDiff2;

        if (diff <= 0) {
          setViewing(updatedDate);
          return;
        }
        const prevMonth = subtractMonths(updatedDate, numberOfMonths - 1);
        setViewing(prevMonth);
      }

      if (d2 && !d1 && diffIndex === 1) {
        setDateInCalendarView(d2, viewing);
        return;
      }
      if (d1 && !d2 && diffIndex === 0) {
        setDateInCalendarView(d1, viewing);
        return;
      }
    },
    [numberOfMonths, setViewing, viewing]
  );

  useEffect(() => {
    handleUpdateView(value);
  }, [value]);

  const handleSelect = useCallback(
    (date: Date) => {
      const filteredValues = [...selected].filter(nullFilter);
      const nextSelected = [...selected];

      if (checkDateInArray(date, filteredValues)) {
        const idx = nextSelected.findIndex(
          (d) => d?.getTime() === date?.getTime()
        );

        nextSelected[idx] = null;
        if (nextSelected?.length < 2) {
          // Add null to the correct position
          for (let i = 0; i < 2; i++) {
            if (!nextSelected[i]) {
              nextSelected[i] = null;
            }
          }
        }
        select(nextSelected, true);
        if (onSelect) onSelect(nextSelected);
        return;
      }

      const len = filteredValues?.length;

      if (len < 2) {
        const nullIdx = nextSelected.findIndex((d) => d === null);
        nextSelected[nullIdx] = date;
        if (nextSelected?.length < 2) {
          // Add null to the correct position
          for (let i = 0; i < 2; i++) {
            if (!nextSelected[i]) {
              nextSelected[i] = null;
            }
          }
        }
        select(nextSelected, true);
        if (onSelect) onSelect(nextSelected);
        return;
      }

      const smallest = filteredValues?.[0];
      const largest = filteredValues?.[1];

      if (date < smallest) {
        select([date, largest], true);
        if (onSelect) onSelect([date, largest]);
        return;
      }
      select([smallest, date], true);
      if (onSelect) onSelect([smallest, date]);
      return;
    },
    [select, onSelect, selected]
  );

  useEffect(() => {
    select(value, true);
  }, [value]);

  return <Calendar months={months} onSelect={handleSelect} />;
};

const RangePickerCalendar = withCalendarContext<RangePickerCalendarProps>(
  RangePickerCalendarComp,
  "RangePickerCalendar",
  { range: true }
);

RangePickerCalendar.defaultProps = {
  onSelect: () => {},
  disableFuture: false,
  disableCurrent: false,
  disablePast: false,
  dateDisabled: () => false,
  currentDate: new Date(),
  numberOfMonths: 2,
} as Partial<RangePickerCalendarProps>;

export { RangePickerCalendar };
export default RangePickerCalendar;
