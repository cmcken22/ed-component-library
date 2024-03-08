import { InputAdornment, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import BaseInput from "src/BaseInput";
import Icon, { IconVariant } from "src/Icon";
import { DateProps } from "./Date.types";
import DatePicker from "./DatePicker";
import DateRangePicker from "./DateRangePicker";
import Popover from "./Popover";

const DateField = ({ range }: DateProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const startAdornment = useCallback(() => {
    return (
      <InputAdornment position="start" sx={{ ml: "8px" }}>
        <Icon icon={IconVariant.Calendar} height="20px" width="20px" />
      </InputAdornment>
    );
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleSelect = useCallback((date: Date) => {
    console.clear();
    console.log(date);
  }, []);

  return (
    <div>
      <BaseInput>
        {({ endAdornment }: any) => (
          <>
            <TextField
              placeholder="MM-DD-YYYY"
              onClick={handleClick}
              autoComplete="one-time-code" // <- this will disable chrome autofill
              InputProps={{
                startAdornment: startAdornment(),
                endAdornment,
              }}
            />
          </>
        )}
      </BaseInput>
      <Popover
        anchorEl={anchorEl}
        placement="bottom-end"
        onClose={() => setAnchorEl(null)}
      >
        {range ? <DateRangePicker /> : <DatePicker onSelect={handleSelect} />}
      </Popover>
    </div>
  );
};

DateField.defaultProps = {};

export default DateField;
