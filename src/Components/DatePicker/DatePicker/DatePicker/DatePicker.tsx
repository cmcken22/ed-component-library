import { useCallback, useEffect, useMemo, useState } from "react";
import DateField from "src/Components/Inputs/DateField";
import Popover from "src/Components/Popover";
import useCommonOnChangeHandler from "src/Hooks/useCommonOnChangeHandler";
import { convertDateToGMT, isValidDate } from "../../Common/utils";
import DatePickerCalendar from "../DatePickerCalendar";
import { DatePickerProps } from "./DatePicker.types";

const DatePickerComp = ({
  value: passedValue,
  onChange,
  currentDate = new Date(),
  disableFuture,
  disableCurrent,
  disablePast,
  dateDisabled,
  numberOfMonths,
  calendarOpen,
  hideCalendarPicker,
  disableTextInput,
  onValidation,
  calendarPlacement,
  popoverProps,
  tools,
  previewSelection,
  disabled,
  debounce,
  allowClear,
  ...dateFieldProps
}: DatePickerProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Date | null>(passedValue);
  const handleChangeCallback = useCommonOnChangeHandler({ onChange, debounce });

  useEffect(() => {
    setValue(passedValue);
  }, [passedValue]);

  const handleSelect = useCallback(
    (date: Date) => {
      setValue(date);
      handleChangeCallback(date);
    },
    [setValue, handleChangeCallback]
  );

  const displayCalendar = useMemo(() => {
    return hideCalendarPicker ? false : open || calendarOpen;
  }, [hideCalendarPicker, open, calendarOpen]);

  return (
    <>
      <DateField
        {...dateFieldProps}
        onClick={() => {
          if (disabled) return;
          setOpen(true);
        }}
        inputRef={(r: any) => setAnchorEl(r)}
        value={value}
        readOnly={disableTextInput}
        onChange={handleSelect}
        disabled={disabled}
        allowClear={allowClear}
        onValidation={onValidation}
        disableFuture={disableFuture}
        disablePast={disablePast}
        disableCurrent={disableCurrent}
        currentDate={currentDate}
      />
      <Popover
        open={displayCalendar}
        anchorEl={anchorEl}
        placement={calendarPlacement}
        onClose={() => {
          if (calendarOpen) return;
          if (anchorEl?.contains(document.activeElement)) return;
          if (document.activeElement === anchorEl) return;
          setOpen(false);
        }}
        {...popoverProps}
      >
        <DatePickerCalendar
          onSelect={handleSelect}
          value={isValidDate(value) ? value : null}
          disableFuture={disableFuture}
          disablePast={disablePast}
          disableCurrent={disableCurrent}
          currentDate={currentDate}
          dateDisabled={dateDisabled}
          numberOfMonths={numberOfMonths}
          previewSelection={previewSelection}
          tools={tools}
        />
      </Popover>
    </>
  );
};

const DatePicker = (props: DatePickerProps) => {
  return <DatePickerComp {...props} value={convertDateToGMT(props?.value)} />;
};

DatePicker.defaultProps = {
  format: "MMM DD, YYYY",
  placeholder: "MMM DD, YYYY",
  numberOfMonths: 1,
  disableFuture: false,
  disableCurrent: false,
  disablePast: false,
  calendarPlacement: "bottom-end",
  tools: false,
  previewSelection: false,
  allowClear: false,
} as Partial<DatePickerProps>;

// export named component for storybook docgen
export { DatePicker };
export default DatePicker;
