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
  const { months, select, selected, isSelected, currentDate, setViewing } =
    useContext(CalendarContext);

  const prevValue = useRef<Date | null>(null);

  // on mount
  useEffect(() => {
    if (value && isValidDate(value)) setViewing(value);
    else setViewing(currentDate);
  }, []);

  useEffect(() => {
    if (value && isValidDate(value)) setViewing(value);
  }, [value]);

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
  }, [value, selected]);

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
