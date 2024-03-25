import { useCallback, useContext, useEffect, useRef } from "react";
import { CalendarWrapper, Day } from "../../Common";
import CalendarContextProvider, {
  CalendarContext,
} from "../../Common/CalendarContextProvider";
import { Month } from "../../Common/Month";
import {
  convertDateToGMT,
  getMonthFromCalendar,
  isValidDate,
  numberOfMonthsBetween,
} from "../../Common/utils";
import {
  DatePickerCalendarCompProps,
  DatePickerCalendarProps,
} from "./DatePickerCalendar.types";

const DatePickerCalendarWrapper = ({
  value,
  onSelect,
  disableFuture,
  disableCurrent,
  disablePast,
  dateDisabled,
  currentDate,
  numberOfMonths,
}: DatePickerCalendarProps) => {
  return (
    <CalendarContextProvider
      disableFuture={disableFuture}
      disableCurrent={disableCurrent}
      disablePast={disablePast}
      dateDisabled={dateDisabled}
      currentDate={currentDate}
      numberOfMonths={numberOfMonths}
    >
      <DatePickerCalendar value={convertDateToGMT(value)} onSelect={onSelect} />
    </CalendarContextProvider>
  );
};

const DatePickerCalendar = ({
  value,
  onSelect,
}: DatePickerCalendarCompProps) => {
  const {
    months,
    select,
    selected,
    isSelected,
    currentDate,
    setViewing,
    numberOfMonths,
    viewing,
  } = useContext(CalendarContext);

  const prevValue = useRef<Date | null>(null);

  // on mount
  useEffect(() => {
    if (value && isValidDate(value)) setViewing(value);
    else setViewing(currentDate);
  }, []);

  const handleUpdateView = useCallback(
    (value: Date) => {
      if (!value || !isValidDate(value)) return;

      // if the number of months is 1, always set the viewing to the value
      if (numberOfMonths === 1) {
        setViewing(value);
        return;
      }
      // otherwise, check of the view needs to be updated or not
      const monthDiff = numberOfMonthsBetween(value, viewing);
      if (monthDiff < 0) {
        setViewing(value);
        return;
      }
      if (monthDiff < numberOfMonths) {
        return;
      }
      setViewing(value);
    },
    [viewing, numberOfMonths, setViewing]
  );

  const handleSelect = useCallback(
    (date: Date) => {
      if (isSelected(date)) {
        if (onSelect) onSelect(null);
        select([], true);
        return;
      }
      select(date, true);
      if (onSelect) onSelect(date);
    },
    [isSelected, onSelect, select]
  );

  // TODO: update current view on date change
  // check if the date fits in the view

  useEffect(() => {
    const currSelected = selected?.[0];
    if (currSelected === value) return;
    if (prevValue.current === value) return;
    prevValue.current = value;
    select(value, true);
    handleUpdateView(value);
  }, [value, selected, handleUpdateView, select]);

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

DatePickerCalendarWrapper.defaultProps = {
  value: null,
  onSelect: () => {},
  onChange: () => {},
  disableFuture: false,
  disableCurrent: false,
  disablePast: false,
  dateDisabled: () => false,
  currentDate: new Date(),
  numberOfMonths: 1,
} as Partial<DatePickerCalendarProps>;

export default DatePickerCalendarWrapper;
