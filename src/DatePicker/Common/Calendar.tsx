import { Box } from "@mui/material";
import { useCallback, useContext } from "react";
import { getChildByDisplayName } from "src/utils";
import PreviewSelectionBar from "../DatePicker/DatePickerCalendar/PreviewSelectionBar";
import PreviewRangeSelectionBar from "../RangePicker/RangePickerCalendar/PreviewSelectionBar";
import { CalendarContext } from "./CalendarContextProvider";
import CalendarWrapper from "./CalendarWrapper";
import Day from "./Day";
import { Month } from "./Month";
import Tools from "./Tools";
import { getMonthFromCalendar } from "./utils";

const Calendar = ({ months, onSelect, children }: any) => {
  const { range } = useContext(CalendarContext);

  const renderTools = useCallback(() => {
    const toolbar = getChildByDisplayName(children, Tools.displayName);
    return toolbar;
  }, [children]);

  const renderPreviewSelectionBar = useCallback(() => {
    const previewSelectionBar = getChildByDisplayName(
      children,
      range
        ? PreviewRangeSelectionBar.displayName
        : PreviewSelectionBar.displayName
    );
    return previewSelectionBar;
  }, [range, children]);

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
        {renderTools()}
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
      {renderPreviewSelectionBar()}
    </Box>
  );
};

export default Calendar;
