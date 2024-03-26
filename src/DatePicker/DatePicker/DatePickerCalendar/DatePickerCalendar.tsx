import { useCallback, useContext, useEffect, useRef } from "react";
import Calendar from "src/DatePicker/Common/Calendar";
import Tools from "src/DatePicker/Common/Tools";
import withCalendarContext from "src/DatePicker/Common/withCalendarContext";
import { CalendarContext } from "../../Common/CalendarContextProvider";
import { isValidDate } from "../../Common/utils";
import {
  DatePickerCalendarCompProps,
  DatePickerCalendarProps,
} from "./DatePickerCalendar.types";
import PreviewSelectionBar from "./PreviewSelectionBar";
import useTools from "./useTools";
import useUpdateView from "./useUpdateView";

const DatePickerCalendarComp = ({
  value,
  onSelect,
  tools,
  toolFilter,
  previewSelection,
}: DatePickerCalendarCompProps) => {
  const { months, select, selected, isSelected, currentDate, setViewing } =
    useContext(CalendarContext);

  const prevValue = useRef<Date | null>(null);
  const handleUpdateView = useUpdateView();

  // on mount
  useEffect(() => {
    if (value && isValidDate(value)) setViewing(value);
    else setViewing(currentDate);
  }, []);

  const handleSelectCallback = useCallback(
    (date: Date) => {
      if (onSelect && !previewSelection) onSelect(date);
    },
    [onSelect, previewSelection]
  );

  const toolItems = useTools({
    tools,
    toolFilter,
    onSelect: handleSelectCallback,
  });

  const handleSelect = useCallback(
    (date: Date) => {
      if (isSelected(date)) {
        if (onSelect) onSelect(null);
        select([], true);
        return;
      }
      select(date, true);
      handleSelectCallback(date);
    },
    [isSelected, onSelect, select, handleSelectCallback]
  );

  useEffect(() => {
    const currSelected = selected?.[0];
    if (currSelected === value) return;
    if (prevValue.current === value) return;
    prevValue.current = value;
    select(value, true);
    handleUpdateView(value);
  }, [value, selected, handleUpdateView, select]);

  const handleApply = useCallback(
    (date: Date) => {
      if (onSelect) onSelect(date);
    },
    [onSelect]
  );

  const handleCancel = useCallback(() => {
    if (onSelect) onSelect(value);
  }, [value, onSelect]);

  return (
    <Calendar months={months} onSelect={handleSelect}>
      {toolItems?.length && <Tools tools={toolItems} />}
      {previewSelection && (
        <PreviewSelectionBar onApply={handleApply} onCancel={handleCancel} />
      )}
    </Calendar>
  );
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
  tools: false,
  previewSelection: false,
} as Partial<DatePickerCalendarProps>;

export { DatePickerCalendar };
export default DatePickerCalendar;
