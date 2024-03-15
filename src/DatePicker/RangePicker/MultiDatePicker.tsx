import { Box } from "@mui/material";
import isEqual from "lodash.isequal";
import { forwardRef, useCallback, useContext, useEffect, useRef } from "react";
import { CalendarWrapper, DatePickerContext } from "../Common";
import Calendar, {
  MonthTitle,
  MonthView,
  NextMonthBtn,
  PrevMonthBtn,
  Spacer,
} from "../Common/CalendarPicker";
import {
  checkDateInArray,
  getMonthFromCalendar,
  nullFilter,
  sorteDates,
} from "../Common/utils";

const MultiDatePickerWrapper = forwardRef(
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
    }: any,
    ref: any
  ) => {
    return (
      <Calendar
        ref={ref}
        disableFuture={disableFuture}
        disableCurrent={disableCurrent}
        disablePast={disablePast}
        dateDisabled={dateDisabled}
        currentDate={currentDate}
        numberOfMonths={numberOfMonths}
        range
      >
        <MulitDatePicker value={value} onSelect={onSelect} />
      </Calendar>
    );
  }
);

const MulitDatePicker = ({ value, onSelect }: any) => {
  const { months, select, selected, isSelected, currentDate, setViewing } =
    useContext(DatePickerContext);

  const prevValue = useRef<Date | null>(null);

  // on mount
  // useEffect(() => {
  //   if (value && isValidDate(value)) setViewing(value);
  //   else setViewing(currentDate);
  // }, []);

  const handleSelect = useCallback(
    (date: Date) => {
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

  useEffect(() => {
    const currSelected = selected;
    if (isEqual(currSelected, value)) return;
    if (isEqual(prevValue.current, value)) return;
    prevValue.current = value;
    select(value, true);
  }, [value, selected]);

  return (
    <CalendarWrapper>
      {months?.map((month, index) => {
        const monthNumber = getMonthFromCalendar(month);
        return (
          <MonthView
            key={`month--${monthNumber}`}
            weeks={month}
            month={monthNumber}
            onSelect={handleSelect}
          >
            <Box
              sx={{
                height: "20px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {index === 0 ? <PrevMonthBtn /> : <Spacer />}
              <MonthTitle weeks={month} />
              {index === months.length - 1 ? <NextMonthBtn /> : <Spacer />}
            </Box>
          </MonthView>
        );
      })}
    </CalendarWrapper>
  );
};

MultiDatePickerWrapper.defaultProps = {
  // value: [],
  onSelect: () => {},
  disableFuture: false,
  disableCurrent: false,
  disablePast: false,
  dateDisabled: () => false,
  currentDate: new Date(),
  numberOfMonths: 1,
};

export default MultiDatePickerWrapper;
