import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import Calendar from "src/DatePicker/Common/Calendar";
import withCalendarContext from "src/DatePicker/Common/withCalendarContext";
import { CalendarContext } from "../../Common/CalendarContextProvider";
import {
  convertDateToGMT,
  isValidDate,
  numberOfMonthsBetween,
} from "../../Common/utils";
import {
  DatePickerCalendarCompProps,
  DatePickerCalendarProps,
} from "./DatePickerCalendar.types";

const DatePickerCalendarComp = ({
  value,
  onSelect,
  tools,
  previewBar,
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
      if (onSelect && !previewBar) onSelect(date);
    },
    [isSelected, onSelect, select, previewBar]
  );

  useEffect(() => {
    const currSelected = selected?.[0];
    if (currSelected === value) return;
    if (prevValue.current === value) return;
    prevValue.current = value;
    select(value, true);
    handleUpdateView(value);
  }, [value, selected, handleUpdateView, select]);

  const handleViewToday = useCallback(() => {
    const today = convertDateToGMT(new Date());
    select(today, true);
    handleUpdateView(today);
  }, [select, handleUpdateView]);

  const handleViewYesterday = useCallback(() => {
    const yesterday = convertDateToGMT(new Date());
    yesterday.setDate(yesterday.getDate() - 1);
    select(yesterday, true);
    handleUpdateView(yesterday);
  }, [select, handleUpdateView]);

  const handleViewThisWeek = useCallback(() => {
    setViewing(new Date());
  }, [setViewing]);

  const handleViewThisMonth = useCallback(() => {
    setViewing(new Date());
  }, [setViewing]);

  const handleViewLastMonth = useCallback(() => {
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    setViewing(lastMonth);
  }, [setViewing]);

  const handleViewThisYear = useCallback(() => {
    setViewing(new Date());
  }, [setViewing, viewing]);

  const handleViewLastYear = useCallback(() => {
    const lastYear = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);
    setViewing(lastYear);
  }, [setViewing, viewing]);

  const toolsList = useMemo(() => {
    const toolsMap = [
      { label: "Today", onClick: handleViewToday },
      { label: "Yesterday", onClick: handleViewYesterday },
      { label: "This Week", onClick: handleViewThisWeek },
      { label: "This Month", onClick: handleViewThisMonth },
      { label: "Last Month", onClick: handleViewLastMonth },
      { label: "This Year", onClick: handleViewThisYear },
      { label: "Last Year", onClick: handleViewLastYear },
    ];
    if (tools) {
      return toolsMap.filter((tool) => tools.includes(tool.label));
    }
  }, [
    tools,
    handleViewToday,
    handleViewYesterday,
    handleViewThisWeek,
    handleViewThisMonth,
    handleViewLastMonth,
    handleViewThisYear,
    handleViewLastYear,
  ]);

  const handleApply = useCallback(
    (date: Date) => {
      console.clear();
      console.log("handleApply:", date);
      if (onSelect) onSelect(date);
    },
    [onSelect]
  );

  const handleCancel = useCallback(() => {
    console.clear();
    console.log("handleCancel:", value);
    if (onSelect) onSelect(value);
  }, [value, onSelect]);

  return (
    <Calendar
      months={months}
      onSelect={handleSelect}
      tools={toolsList}
      previewBar={previewBar}
      onApply={handleApply}
      onCancel={handleCancel}
    />
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
  tools: [
    "Today",
    "Yesterday",
    "This Week",
    "This Month",
    "Last Month",
    "This Year",
    "Last Year",
  ],
} as Partial<DatePickerCalendarProps>;

export { DatePickerCalendar };
export default DatePickerCalendar;
