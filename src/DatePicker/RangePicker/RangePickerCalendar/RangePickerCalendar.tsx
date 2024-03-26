import { useCallback, useContext, useEffect } from "react";
import Calendar from "src/DatePicker/Common/Calendar";
import Tools from "src/DatePicker/Common/Tools";
import withCalendarContext from "src/DatePicker/Common/withCalendarContext";
import { CalendarContext } from "../../Common";
import {
  checkDateInArray,
  nullFilter,
  numberOfMonthsBetween,
  sorteDates,
} from "../../Common/utils";
import PreviewSelectionBar from "./PreviewSelectionBar";
import {
  RangePickerCalendarCompProps,
  RangePickerCalendarProps,
} from "./RangePickerCalendar.types";
import useTools from "./useTools";
import useUpdateView from "./useUpdateView";

const RangePickerCalendarComp = ({
  value,
  onSelect,
  tools,
  toolFilter,
  previewSelection,
}: RangePickerCalendarCompProps) => {
  const { months, select, selected, setViewing, currentDate, numberOfMonths } =
    useContext(CalendarContext);

  const handleUpdateView = useUpdateView();

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

  useEffect(() => {
    handleUpdateView(value);
  }, [value]);

  const handleSelectCallback = useCallback(
    (date: Date[]) => {
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
  tools: false,
  previewSelection: false,
} as Partial<RangePickerCalendarProps>;

export { RangePickerCalendar };
export default RangePickerCalendar;
