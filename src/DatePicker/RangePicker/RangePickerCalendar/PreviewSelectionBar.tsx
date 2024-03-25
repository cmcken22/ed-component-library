import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useContext } from "react";
import Button from "src/Button";
import { CalendarContext } from "src/DatePicker/Common";
import Icon from "src/Icon";
dayjs.extend(customParseFormat);

const PreviewSelectionBar = ({ onApply, onCancel }: any) => {
  const { selected, format } = useContext(CalendarContext);
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
      <Box display="flex" flexDirection="row">
        <Box sx={{ width: "137px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MuiDatePicker
              format={format}
              disableOpenPicker
              value={selected?.[0] ? dayjs(selected?.[0]) : null}
              onChange={(date: any) => {
                console.log("date:", date);
              }}
            />
          </LocalizationProvider>
        </Box>
        <Box display="flex" alignItems="center" mx={0.5}>
          <Icon icon="ArrowRight" size={16} />
        </Box>
        <Box sx={{ width: "137px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MuiDatePicker
              format={format}
              disableOpenPicker
              value={selected?.[1] ? dayjs(selected?.[1]) : null}
              onChange={(date: any) => {
                console.log("date:", date);
              }}
            />
          </LocalizationProvider>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" gap="11px" ml={3}>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={() => onApply(selected)}>Apply</Button>
      </Box>
    </Box>
  );
};

PreviewSelectionBar.displayName = "PreviewSelectionBar";

export default PreviewSelectionBar;
