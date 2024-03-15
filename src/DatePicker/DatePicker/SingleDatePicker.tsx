import { Box } from "@mui/material";
import { useCallback, useContext, useEffect, useRef } from "react";
import { CalendarWrapper, DatePickerContext } from "../Common";
import Calendar, {
  MonthTitle,
  MonthView,
  NextMonthBtn,
  PrevMonthBtn,
  Spacer,
} from "../Common/CalendarPicker";
import { getMonthFromCalendar, isValidDate } from "../Common/utils";

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
    <Calendar
      disableFuture={disableFuture}
      disableCurrent={disableCurrent}
      disablePast={disablePast}
      dateDisabled={dateDisabled}
      currentDate={currentDate}
      numberOfMonths={numberOfMonths}
    >
      <SingleDatePicker value={value} onSelect={onSelect} />
    </Calendar>
  );
};

const SingleDatePicker = ({ value, onSelect }: any) => {
  const { months, select, selected, isSelected, currentDate, setViewing } =
    useContext(DatePickerContext);

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
    handleSelect(value);
  }, [value, selected]);

  return (
    <CalendarWrapper
      data-testid="single-date-picker-modal"
      className="single-date-picker-modal"
    >
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
