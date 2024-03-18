import { useCallback, useContext, useEffect, useRef } from "react";
import { CalendarWrapper, Day } from "../Common";
import CalendarContextProvider, {
  CalendarContext,
} from "../Common/CalendarContextProvider";
import { Month } from "../Common/Month";
import {
  convertDateToGMT,
  getMonthFromCalendar,
  isValidDate,
} from "../Common/utils";

const SingleDatePickerWrapper = ({
  value,
  onSelect,
  disableFuture,
  disableCurrent,
  disablePast,
  dateDisabled,
  currentDate,
  numberOfMonths,
}: any) => {
  return (
    <CalendarContextProvider
      disableFuture={disableFuture}
      disableCurrent={disableCurrent}
      disablePast={disablePast}
      dateDisabled={dateDisabled}
      currentDate={currentDate}
      numberOfMonths={numberOfMonths}
    >
      <SingleDatePicker value={convertDateToGMT(value)} onSelect={onSelect} />
    </CalendarContextProvider>
  );
};

const SingleDatePicker = ({ value, onSelect }: any) => {
  const { months, select, selected, isSelected, currentDate, setViewing } =
    useContext(CalendarContext);

  const prevValue = useRef<Date | null>(null);

  // on mount
  useEffect(() => {
    if (value && isValidDate(value)) setViewing(value);
    else setViewing(currentDate);
  }, []);

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

SingleDatePickerWrapper.defaultProps = {
  value: null,
  onSelect: () => {},
  disableFuture: false,
  disableCurrent: false,
  disablePast: false,
  dateDisabled: () => false,
  currentDate: new Date(),
  numberOfMonths: 1,
};

export default SingleDatePickerWrapper;
