import isEqual from "lodash.isequal";
import { forwardRef, useCallback, useContext, useEffect, useRef } from "react";
import CalendarContextProvider from "src/DatePicker/Common/CalendarContextProvider";
import { CalendarContext, CalendarWrapper, Day } from "../../Common";
import { Month } from "../../Common/Month";
import {
  checkDateInArray,
  formatDateRange,
  getMonthFromCalendar,
  nullFilter,
  numberOfMonthsBetween,
  sorteDates,
  subtractMonths,
} from "../../Common/utils";
import {
  RangePickerCalendarCompProps,
  RangePickerCalendarProps,
} from "./RangePickerCalendar.types";

const findDiffIndex = (prev: Date[], next: Date[]) => {
  const len = Math.max(prev.length, next.length);
  for (let i = 0; i < len; i++) {
    if (!isEqual(prev?.[i], next?.[i])) return i;
  }
  return -1;
};

const RangePickerCalendar = forwardRef(
  (
    {
      value,
      onSelect,
      disableFuture,
      disableCurrent,
      disablePast,
      dateDisabled,
      currentDate,
      numberOfMonths,
    }: RangePickerCalendarProps,
    ref: any
  ) => {
    return (
      <CalendarContextProvider
        ref={ref}
        numberOfMonths={numberOfMonths}
        disableFuture={disableFuture}
        disableCurrent={disableCurrent}
        disablePast={disablePast}
        dateDisabled={dateDisabled}
        currentDate={currentDate}
        range
      >
        <RangePickerCalendarComp
          value={formatDateRange(value)}
          onSelect={onSelect}
        />
      </CalendarContextProvider>
    );
  }
);

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

        if (diff < 0) {
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
        setDateInCalendarView(d2, viewing);
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
      console.clear();
      console.log("handleSelect:", date);
      // TODO: prevent unselecting the min date if the max date is selected
      let nextSelected = [...selected]?.filter(nullFilter).sort(sorteDates);
      console.clear();
      console.log("nextSelected:", nextSelected);
      console.log("date:", date);
      // return;
      // setViewing(date);

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
      console.log("smallest:", smallest);
      console.log("largest:", largest);

      // if (date === smallest) {
      //   select([largest], true);
      //   if (onSelect) onSelect([largest]);
      //   return;
      // }
      // if (date === largest) {
      //   select([smallest], true);
      //   if (onSelect) onSelect([smallest]);
      //   return;
      // }

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
    // const currSelected = selected;
    // if (isEqual(currSelected, value)) return;
    // if (isEqual(prevValue.current, value)) return;
    // prevValue.current = value;
    select(value, true);
  }, [value]);

  return (
    <CalendarWrapper>
      {months?.map((weeks, index) => {
        const monthNumber = getMonthFromCalendar(weeks);
        return (
          <Month
            key={`month--${monthNumber}`}
            weeks={weeks}
            monthNumber={monthNumber}
            onSelect={handleSelect}
          >
            <Month.Header
              displayPrevMonthBtn={index === 0}
              displayNextMonthBtn={index === months.length - 1}
            />
            <Month.WeeklyHeader />
            {weeks?.map((week: Date[], weekIdx: number) => {
              return (
                <Month.Week key={`${monthNumber}--${weekIdx}`}>
                  {week?.map((day: Date) => (
                    <Day
                      key={`${monthNumber}--${day.toISOString()}`}
                      day={day}
                      onSelect={handleSelect}
                    />
                  ))}
                </Month.Week>
              );
            })}
          </Month>
        );
      })}
    </CalendarWrapper>
  );
};

RangePickerCalendar.defaultProps = {
  onSelect: () => {},
  disableFuture: false,
  disableCurrent: false,
  disablePast: false,
  dateDisabled: () => false,
  currentDate: new Date(),
  numberOfMonths: 2,
} as Partial<RangePickerCalendarProps>;

export default RangePickerCalendar;
