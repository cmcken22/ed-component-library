import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCallback, useRef, useState } from "react";
import BaseInput from "src/BaseInput";
import { DateProps } from "./Date.types";
import DatePicker from "./DatePicker";
import DateRangeInput from "./DateRangeInput";
import Popover from "./Popover";
dayjs.extend(customParseFormat);

const DateField = ({
  value: passedValue,
  onChange,
  format,
  placeholder,
  currentDate = new Date(),
  disableFuture,
  disableCurrent,
  disablePast,
  dateDisabled,
  status,
}: DateProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState<Date[] | null>(
    (passedValue ? passedValue : []) as Date[]
  );
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(0);
  const popoverRef = useRef(null);

  const handleSelect = useCallback(
    (dateRange: Date[]) => {
      console.clear();
      console.log("dateRange:", dateRange);
      setValue(dateRange);
      // TODO: validate date range before updating
      // if (disableFuture && date > currentDate) {
      //   return;
      // }
      // if (disablePast && date < currentDate) {
      //   return;
      // }
      // setValue(date);
      // if (onChange) onChange(date);
    },
    [setValue, onChange, disableFuture, disablePast, currentDate]
  );

  return (
    <div>
      <BaseInput key={key} status={status}>
        {({ endAdornment }: any) => (
          <>
            <Box onClick={() => setOpen(true)} ref={(r: any) => setAnchorEl(r)}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangeInput
                  format={format}
                  value={value}
                  onChange={handleSelect}
                  placeholder={placeholder}
                  endAdornment={endAdornment}
                  status={status}
                />
              </LocalizationProvider>
            </Box>
          </>
        )}
      </BaseInput>
      <Popover
        key={`date-picker--${key}`}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
        onClose={() => {
          if (anchorEl?.contains(document.activeElement)) return;
          if (document.activeElement === anchorEl) return;
          setOpen(false);
          setKey((prev) => prev + 1);
        }}
      >
        <DatePicker
          ref={popoverRef}
          key={`date-picker2--${key}`}
          onSelect={handleSelect}
          value={value}
          disableFuture={disableFuture}
          disableCurrent={disableCurrent}
          disablePast={disablePast}
          dateDisabled={dateDisabled}
          currentDate={currentDate}
          numberOfMonths={2}
          range
        />
      </Popover>
    </div>
  );
};

DateField.defaultProps = {
  format: "MM/DD/YYYY",
  placeholder: "MM/DD/YYYY",
};

export default DateField;
