import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import Calendar from "src/DatePicker/Common/Calendar";
import Tools from "src/DatePicker/Common/Tools";
import withCalendarContext from "src/DatePicker/Common/withCalendarContext";
import { CalendarContext } from "../../Common";
import {
  checkDateInArray,
  convertDateToGMT,
  findDiffIndex,
  nullFilter,
  numberOfMonthsBetween,
  sorteDates,
  subtractMonths,
} from "../../Common/utils";
import PreviewSelectionBar from "./PreviewSelectionBar";
import {
  RangePickerCalendarCompProps,
  RangePickerCalendarProps,
} from "./RangePickerCalendar.types";

const useUpdateView = () => {
  const { numberOfMonths, viewing, setViewing } = useContext(CalendarContext);
  const prevValue = useRef<Date[]>([]);

  console.log("viewing:", viewing);

  const setDateInCalendarView = useCallback(
    (date: Date, viewing: Date) => {
      console.log("date:", date);
      console.log("viewing:", viewing);
      const monthDiff = numberOfMonthsBetween(date, viewing);
      console.log("monthDiff:", monthDiff);
      if (monthDiff >= 0 && monthDiff < numberOfMonths) {
        console.log("nope");
        return;
      }
      if (monthDiff > 0) {
        const prevMonth = subtractMonths(date, numberOfMonths - 1);
        setViewing(prevMonth);
        console.log("yep:", prevMonth);
        return;
      }
      console.log("else:", date);
      setViewing(date);
    },
    [setViewing]
  );

  const handleUpdateView = useCallback(
    (value: Date[]) => {
      console.clear();
      console.log("handleUpdateView:", value);
      console.log("viewing:", viewing);
      // if (isEqual(prevValue.current, value)) return;
      const diffIndex = findDiffIndex(prevValue.current, value);
      console.log("diffIndex:", diffIndex);
      // prevValue.current = value;

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
          console.log("returning 1");
          return;
        }

        // can they both fit in the range?
        const monthDiffRange = numberOfMonthsBetween(d1, d2, true);
        if (monthDiffRange < numberOfMonths) {
          const smallest = [...value]?.sort(sorteDates)?.[0];
          setViewing(smallest);
          console.log("returning 2", smallest);
          return;
        }

        const updatedDate = diffIndex === 0 ? d1 : d2;
        const diff = diffIndex === 0 ? monthDiff1 : monthDiff2;

        if (diff <= 0) {
          setViewing(updatedDate);
          console.log("returning 3");
          return;
        }
        const prevMonth = subtractMonths(updatedDate, numberOfMonths - 1);
        setViewing(prevMonth);
        console.log("returning 4");
        return;
      }

      if (d2 && !d1 && diffIndex === 1) {
        setDateInCalendarView(d2, viewing);
        console.log("returning 5");
        return;
      }
      if (d1 && !d2 && diffIndex === 0) {
        setDateInCalendarView(d1, viewing);
        console.log("returning 6");
        return;
      }
    },
    [numberOfMonths, setViewing, viewing]
  );

  return handleUpdateView;
};

const useTools = ({ tools, toolFilter }: any) => {
  const { select, setViewing, viewing } = useContext(CalendarContext);
  const handleUpdateView = useUpdateView();

  const handleViewToday = useCallback(() => {
    const today = convertDateToGMT(new Date());
    select(today, true);
    // setViewing(today);
    handleUpdateView([today]);
  }, [select, handleUpdateView, viewing]);

  const handleViewYesterday = useCallback(() => {
    const yesterday = convertDateToGMT(new Date());
    yesterday.setDate(yesterday.getDate() - 1);
    select(yesterday, true);
    // setViewing(yesterday);
    handleUpdateView([yesterday]);
  }, [select, handleUpdateView]);

  const handleViewThisWeek = useCallback(() => {
    // Copy the input date to avoid mutating the original date
    const currentDate = convertDateToGMT(new Date());

    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const currentDayOfWeek = currentDate.getDay();

    // Calculate the difference between the current day of the week and Sunday (0)
    const differenceToSunday = currentDayOfWeek;

    // Calculate the difference to Saturday (6)
    const differenceToSaturday = 6 - currentDayOfWeek;

    // Clone the current date to avoid mutating it
    const firstDayOfWeek = new Date(currentDate);
    firstDayOfWeek.setDate(currentDate.getDate() - differenceToSunday);

    // Clone the current date to avoid mutating it
    const lastDayOfWeek = new Date(currentDate);
    lastDayOfWeek.setDate(currentDate.getDate() + differenceToSaturday);

    select([firstDayOfWeek, lastDayOfWeek], true);
    handleUpdateView([firstDayOfWeek, lastDayOfWeek]);
  }, [select, handleUpdateView]);

  const handleViewThisMonth = useCallback(() => {
    const currentDate = convertDateToGMT(new Date());

    // Get the year and month of the input date
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Create a new date object for the first day of the month
    const firstDayOfMonth = new Date(year, month, 1);

    // Get the last day of the month by setting the date to 0 (which is the last day of the previous month)
    const lastDayOfMonth = new Date(year, month + 1, 0);

    select([firstDayOfMonth, lastDayOfMonth], true);
    handleUpdateView([firstDayOfMonth, lastDayOfMonth]);
  }, [select, handleUpdateView]);

  const handleViewLastMonth = useCallback(() => {
    const currentDate = convertDateToGMT(subtractMonths(new Date(), 1));

    // Get the year and month of the input date
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Create a new date object for the first day of the month
    const firstDayOfMonth = new Date(year, month, 1);

    // Get the last day of the month by setting the date to 0 (which is the last day of the previous month)
    const lastDayOfMonth = new Date(year, month + 1, 0);

    select([firstDayOfMonth, lastDayOfMonth], true);
    handleUpdateView([firstDayOfMonth, lastDayOfMonth]);
  }, [select, handleUpdateView]);

  const handleViewThisYear = useCallback(() => {
    setViewing(new Date());
  }, [setViewing]);

  const handleViewLastYear = useCallback(() => {
    const lastYear = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);
    setViewing(lastYear);
  }, [setViewing]);

  const toolsList = useMemo(() => {
    if (!tools) return [];
    const toolsMap = [
      { label: "Today", onClick: handleViewToday },
      { label: "Yesterday", onClick: handleViewYesterday },
      { label: "This Week", onClick: handleViewThisWeek },
      { label: "This Month", onClick: handleViewThisMonth },
      { label: "Last Month", onClick: handleViewLastMonth },
      { label: "This Year", onClick: handleViewThisYear },
      { label: "Last Year", onClick: handleViewLastYear },
    ];

    if (toolFilter) {
      return toolsMap.filter(toolFilter);
    }
    return toolsMap;
  }, [
    tools,
    toolFilter,
    handleViewToday,
    handleViewYesterday,
    handleViewThisWeek,
    handleViewThisMonth,
    handleViewLastMonth,
    handleViewThisYear,
    handleViewLastYear,
  ]);

  return toolsList;
};

const RangePickerCalendarComp = ({
  value,
  onSelect,
  tools,
  toolFilter,
  previewSelection,
}: RangePickerCalendarCompProps) => {
  const { months, select, selected, setViewing, currentDate, numberOfMonths } =
    useContext(CalendarContext);

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

  const handleUpdateView = useUpdateView();
  const toolItems = useTools({ tools, toolFilter });

  useEffect(() => {
    handleUpdateView(value);
  }, [value]);

  const handleSelectCallback = useCallback(
    (date: Date[]) => {
      if (onSelect && !previewSelection) onSelect(date);
    },
    [onSelect, previewSelection]
  );

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
        handleSelectCallback(nextSelected);
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
        handleSelectCallback(nextSelected);
        return;
      }

      const smallest = filteredValues?.[0];
      const largest = filteredValues?.[1];

      if (date < smallest) {
        select([date, largest], true);
        handleSelectCallback([date, largest]);
        return;
      }
      select([smallest, date], true);
      handleSelectCallback([smallest, date]);
      return;
    },
    [select, handleSelectCallback, selected]
  );

  useEffect(() => {
    select(value, true);
  }, [value]);

  const handleApply = useCallback(
    (date: Date[]) => {
      console.clear();
      console.log("handleApply:", date);
      if (onSelect) onSelect(date);
    },
    [onSelect]
  );

  const handleCancel = useCallback(() => {
    if (onSelect) onSelect(value || [null, null]);
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
  tools: true,
  previewSelection: true,
} as Partial<RangePickerCalendarProps>;

export { RangePickerCalendar };
export default RangePickerCalendar;
