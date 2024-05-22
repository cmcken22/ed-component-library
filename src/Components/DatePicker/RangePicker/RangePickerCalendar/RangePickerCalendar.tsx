import isEqual from "lodash.isequal";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Calendar from "src/Components/DatePicker/Common/Calendar";
import Tools from "src/Components/DatePicker/Common/Tools";
import withCalendarContext from "src/Components/DatePicker/Common/withCalendarContext";
import { CalendarContext } from "../../Common";
import {
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

const startingPos = (value: any[]) => {
  if (!value || !value?.length) return 0;
  return value.length;
};

const RangePickerCalendarComp = ({
  value,
  onSelect,
  tools,
  toolFilter,
  previewSelection,
  onSelectionIndexChange,
}: RangePickerCalendarCompProps) => {
  const { months, select, selected, setViewing, currentDate, numberOfMonths } =
    useContext(CalendarContext);
  const [selectionCount, setSelectionCount] = useState(startingPos(value));
  const prevValue = useRef<Date[]>([]);

  const handleUpdateView = useUpdateView();

  useEffect(() => {
    if (onSelectionIndexChange) {
      onSelectionIndexChange(selectionCount % 2);
    }
  }, [selectionCount]);

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
    if (!isEqual(value, prevValue.current)) {
      handleUpdateView(value);
    }
    prevValue.current = value;
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
      console.clear();
      let nextSelectionCount = selectionCount;
      const filteredValues = [...selected].filter(nullFilter);
      const nextSelected = [...filteredValues];

      const idx = nextSelectionCount % 2;
      nextSelectionCount += 1;
      nextSelected[idx] = date;

      if (nextSelected?.length === 2) {
        const first = nextSelected[0];
        const last = nextSelected[1];

        if (idx === 0) {
          if (first > last) {
            nextSelectionCount = 1;
            select([first], true);
            handleSelectCallback([first]);
            setSelectionCount(nextSelectionCount);
            return;
          }
        }

        if (idx === 1) {
          if (last < first) {
            nextSelectionCount = 1;
            select([last], true);
            handleSelectCallback([last]);
            setSelectionCount(nextSelectionCount);
            return;
          }
        }
      }

      select(nextSelected, true);
      handleSelectCallback(nextSelected);
      setSelectionCount(nextSelectionCount);
      return;
    },
    [select, handleSelectCallback, selected, selectionCount, setSelectionCount]
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
