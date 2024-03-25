import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useContext } from "react";
import Button from "src/Button";
import { CalendarContext } from "src/DatePicker/Common";
dayjs.extend(customParseFormat);

const PreviewSelectionBar = ({ onApply, onCancel }: any) => {
  const { selected } = useContext(CalendarContext);
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
            // key={`MuiDatePicker--${disableTextInput}`}
            // format={format}
            disableOpenPicker
            value={selected?.[0] ? dayjs(selected?.[0]) : null}
            // disabled={disabled}
            sx={{
              ".MuiInputBase-root": {
                // cursor: disableTextInput ? "pointer" : "text",
                "& input": {
                  // pointerEvents: disableTextInput ? "none" : "",
                },
              },
            }}
            slotProps={{
              textField: {
                // variant: VariantMap[variant] as any,
                // onFocus: disableTextInput ? (e) => e?.target?.blur() : null,
                InputProps: {
                  // sx: { "& input": { color: getFontColor(color, value) } },
                  // placeholder,
                  // startAdornment: startAdornment(),
                  // endAdornment,
                },
              },
            }}
            onChange={(date: any) => {
              console.log("date:", date);
              // if (disableTextInput) return;
              // handleSelect(date ? date.toDate() : null);
            }}
          />
        </LocalizationProvider>
      </Box>
      <Button variant="outlined" onClick={onCancel}>
        Cancel
      </Button>
      <Button onClick={() => onApply(selected?.[0])}>Apply</Button>
    </Box>
  );
};

PreviewSelectionBar.displayName = "PreviewSelectionBar";

export default PreviewSelectionBar;
