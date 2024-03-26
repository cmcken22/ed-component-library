import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCallback, useContext } from "react";
import Button from "src/Button";
import { CalendarContext } from "src/DatePicker/Common";
import { isValidDate } from "src/DatePicker/Common/utils";
import useUpdateView from "./useUpdateView";
dayjs.extend(customParseFormat);

const PreviewSelectionBar = ({ onApply, onCancel }: any) => {
  const { selected, format, select } = useContext(CalendarContext);
  const handleUpdateView = useUpdateView();

  const handleChange = useCallback(
    (date: Date) => {
      if (!isValidDate(date)) return;
      select(date, true);
      handleUpdateView(date);
    },
    [handleUpdateView]
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        p: 2,
        borderTop: "1px solid",
        borderColor: "charcoal.20",
      }}
    >
      <Box sx={{ width: "137px" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MuiDatePicker
            format={format}
            disableOpenPicker
            value={selected?.[0] ? dayjs(selected?.[0]) : null}
            onChange={(date: any) => {
              handleChange(date ? date.toDate() : null);
            }}
          />
        </LocalizationProvider>
      </Box>
      <Box display="flex" flexDirection="row" gap="11px" ml={3}>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={() => onApply(selected?.[0])}>Apply</Button>
      </Box>
    </Box>
  );
};

PreviewSelectionBar.displayName = "PreviewSelectionBar";

export default PreviewSelectionBar;
