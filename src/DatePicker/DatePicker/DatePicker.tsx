import { Box, InputAdornment } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import BaseInput, { BaseInputContext } from "src/BaseInput";
import Icon, { IconVariant } from "src/Icon";
import Popover from "../Popover";
import { DatePickerProps } from "./DatePicker.types";
import SingleDatePicker from "./SingleDatePicker";
dayjs.extend(customParseFormat);

const convertDateString = (text) => {
  if (!text) return null;
  if (text instanceof Date) return text;
  return new Date(text);
};

function isValidDate(d: any) {
  // @ts-ignore
  return d instanceof Date && !isNaN(d);
}

const DatePicker = (props: DatePickerProps) => {
  const { id, status, fullWidth, ...rest } = props;

  return (
    <BaseInput id={id} status={status} fullWidth={fullWidth}>
      <DatePickerComp {...rest} />
    </BaseInput>
  );
};

const DatePickerComp = ({
  label,
  labelPosition,
  required,
  helperText,
  value: passedValue,
  onChange,
  disabled,
  format,
  placeholder,
  currentDate = new Date(),
  disableFuture,
  disableCurrent,
  disablePast,
  dateDisabled,
  numberOfMonths,
  calendarOpen,
  hideCalendar,
  disableTextInput,
}: DatePickerProps) => {
  const { endAdornment } = useContext(BaseInputContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState<Date | null>(
    convertDateString(passedValue)
  );
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(0);
  const popoverRef = useRef(null);

  useEffect(() => {
    setValue(convertDateString(passedValue));
  }, [passedValue]);

  const startAdornment = useCallback(() => {
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        <Icon icon={IconVariant.Calendar} height="20px" width="20px" />
      </InputAdornment>
    );
  }, []);

  const checkDateDisabled = useCallback(
    (date: Date) => {
      const formattedCurrentDate = new Date(currentDate);
      formattedCurrentDate.setHours(0, 0, 0, 0);

      if (disableCurrent && date === formattedCurrentDate) {
        return true;
      }
      if (disableFuture && date > formattedCurrentDate) {
        return true;
      }
      if (disablePast && date < formattedCurrentDate) {
        return true;
      }
      if (dateDisabled) {
        return dateDisabled(date);
      }
      return false;
    },
    [disableCurrent, currentDate, disableFuture, disablePast, dateDisabled]
  );

  const handleSelect = useCallback(
    (date: Date) => {
      const dateDisabled = checkDateDisabled(date);
      if (dateDisabled) return;
      setValue(date);
      if (onChange) onChange(date);
    },
    [setValue, onChange, checkDateDisabled]
  );

  const displayCalendar = useMemo(() => {
    return hideCalendar ? false : open || calendarOpen;
  }, [hideCalendar, open, calendarOpen]);

  return (
    <>
      <BaseInput.Label required={required} position={labelPosition}>
        {label}
      </BaseInput.Label>
      <Box onClick={() => setOpen(true)} ref={(r: any) => setAnchorEl(r)}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MuiDatePicker
            key={`MuiDatePicker--${disableTextInput}--${key}`}
            format={format}
            disableOpenPicker
            value={dayjs(value)}
            disabled={disabled}
            sx={{
              ".MuiInputBase-root": {
                cursor: disableTextInput ? "pointer" : "text",
                "& input": {
                  pointerEvents: disableTextInput ? "none" : "",
                },
              },
            }}
            slotProps={{
              textField: {
                onFocus: disableTextInput ? (e) => e?.target?.blur() : null,
                InputProps: {
                  placeholder,
                  startAdornment: startAdornment(),
                  endAdornment,
                },
              },
            }}
            onChange={(date: any) => {
              if (disableTextInput) return;
              handleSelect(date.toDate());
            }}
          />
        </LocalizationProvider>
      </Box>
      <BaseInput.HelperText>{helperText}</BaseInput.HelperText>
      <Popover
        key={`date-picker--${key}`}
        open={displayCalendar}
        anchorEl={anchorEl}
        placement="bottom-end"
        onClose={() => {
          if (calendarOpen) return;
          if (anchorEl?.contains(document.activeElement)) return;
          if (document.activeElement === anchorEl) return;
          setOpen(false);
          setKey((prev) => prev + 1);
        }}
      >
        <SingleDatePicker
          onSelect={handleSelect}
          value={isValidDate(value) ? value : null}
          disableFuture={disableFuture}
          disablePast={disablePast}
          disableCurrent={disableCurrent}
          currentDate={currentDate}
          dateDisabled={dateDisabled}
          numberOfMonths={numberOfMonths}
        />
      </Popover>
    </>
  );
};

DatePicker.defaultProps = {
  format: "MM-DD-YYYY",
  placeholder: "MM-DD-YYYY",
  numberOfMonths: 1,
} as Partial<DatePickerProps>;

export default DatePicker;
