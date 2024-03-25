import { useCallback, useContext, useEffect, useRef } from "react";
import Calendar from "src/DatePicker/Common/Calendar";
import withCalendarContext from "src/DatePicker/Common/withCalendarContext";
import { CalendarContext } from "../../Common/CalendarContextProvider";
import { isValidDate, numberOfMonthsBetween } from "../../Common/utils";
import {
  DatePickerCalendarCompProps,
  DatePickerCalendarProps,
} from "./DatePickerCalendar.types";

const DatePickerCalendarComp = ({
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

  useEffect(() => {
    const currSelected = selected?.[0];
    if (currSelected === value) return;
    if (prevValue.current === value) return;
    prevValue.current = value;
    select(value, true);
    handleUpdateView(value);
  }, [value, selected, handleUpdateView, select]);

  return <Calendar months={months} onSelect={handleSelect} />;
};

const DatePickerCalendar = withCalendarContext<DatePickerCalendarProps>(
  DatePickerCalendarComp,
  "DatePickerCalendar",
  { range: false }
);

DatePickerCalendar.defaultProps = {
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

export { DatePickerCalendar };
export default DatePickerCalendar;
