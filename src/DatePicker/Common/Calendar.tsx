import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useContext } from "react";
import Button from "src/Button";
import Typography from "src/Typography";
import { CalendarContext } from "./CalendarContextProvider";
import CalendarWrapper from "./CalendarWrapper";
import Day from "./Day";
import { Month } from "./Month";
import { getMonthFromCalendar } from "./utils";
dayjs.extend(customParseFormat);

const Tools = ({ tools }: any) => {
  return (
    <Box
      sx={{
        p: 2,
        width: "100px",
        ".toolbar-item": {
          cursor: "pointer",
        },
        borderRight: "1px solid",
        borderColor: "charcoal.20",
      }}
    >
      {tools?.map((tool: any) => (
        <Box key={tool.label} onClick={tool.onClick} className="toolbar-item">
          <Typography variant="bodyXS">{tool.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

const PreviewBar = ({ onApply, onCancel }: any) => {
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

const Calendar = ({
  months,
  onSelect,
  tools,
  onApply,
  onCancel,
  previewBar,
}: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {!tools || tools?.length === 0 ? null : <Tools tools={tools} />}
        <CalendarWrapper>
          {months?.map((weeks, index) => {
            const monthNumber = getMonthFromCalendar(weeks);
            return (
              <Month
                key={`month--${monthNumber}`}
                weeks={weeks}
                monthNumber={monthNumber}
              >
                <Month.Header
                  displayPrevMonthBtn={index === 0}
                  displayNextMonthBtn={index === months.length - 1}
                />
                <Month.WeeklyHeader />
                {weeks?.map((week: Date[], weekIdx: number) => {
                  return (
                    <Month.Week key={`${monthNumber}--${weekIdx}`}>
                      {week?.map((day: Date) => (
                        <Day
                          key={`${monthNumber}--${day.toISOString()}`}
                          day={day}
                          onSelect={onSelect}
                        />
                      ))}
                    </Month.Week>
                  );
                })}
              </Month>
            );
          })}
        </CalendarWrapper>
      </Box>
      {previewBar && <PreviewBar onApply={onApply} onCancel={onCancel} />}
    </Box>
  );
};

export default Calendar;
