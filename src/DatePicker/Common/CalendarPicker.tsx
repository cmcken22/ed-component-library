import { Box } from "@mui/material";
import { useCallback, useContext, useMemo } from "react";
import { Icon, Typography } from "../..";
import CalendarWrapper from "./CalendarWrapper";
import DatePickerContextProvider, {
  DatePickerContext,
} from "./DatePickerContextProvider";
import Day from "./Day";
import { getFirstDay, getMonthFromCalendar, numberToMonth } from "./utils";

export const WeeklyHeader = () => {
  return (
    <Box display={"flex"} flexDirection={"row"}>
      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => {
        return (
          <Box
            key={day}
            sx={{
              height: "28px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
            }}
          >
            <Typography
              variant="bodyXS"
              color="charcoal.50"
              preventTextSelection
            >
              {day}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export const WeekView = ({ month, week }: any) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      sx={{
        height: "30px",
      }}
    >
      {week?.map((day) => {
        return (
          <Day key={`${month}--${day.toISOString()}`} month={month} day={day} />
        );
      })}
    </Box>
  );
};

export const MonthTitle = ({ weeks }: any) => {
  const firstDayOfMonth = useMemo(() => getFirstDay(weeks), [weeks]);
  const month = new Date(firstDayOfMonth).getMonth();
  const year = new Date(firstDayOfMonth).getFullYear();
  return (
    <Typography variant="bodyS" fontWeight="bold" preventTextSelection>
      {numberToMonth(month)} {year}
    </Typography>
  );
};

export const NextMonthBtn = () => {
  const { viewNextMonth } = useContext(DatePickerContext);

  const handleViewNextMonth = useCallback(
    (e) => {
      e.stopPropagation();
      viewNextMonth();
    },
    [viewNextMonth]
  );

  return (
    <Box onClick={handleViewNextMonth} sx={{ cursor: "pointer" }}>
      <Icon icon="ArrowRight" height="16px" width="16px" />
    </Box>
  );
};

export const PrevMonthBtn = () => {
  const { viewPreviousMonth } = useContext(DatePickerContext);

  const handleViewPrevMonth = useCallback(
    (e) => {
      e.stopPropagation();
      viewPreviousMonth();
    },
    [viewPreviousMonth]
  );

  return (
    <Box onClick={handleViewPrevMonth} sx={{ cursor: "pointer" }}>
      <Icon icon="ArrowLeft" height="16px" width="16px" />
    </Box>
  );
};

export const MonthView = ({ weeks, month, children }: any) => {
  return (
    <Box>
      {children}
      <WeeklyHeader />
      {weeks?.map((week, i) => {
        return <WeekView month={month} week={week} key={i} />;
      })}
    </Box>
  );
};

const Spacer = () => (
  <Box
    sx={{
      height: "16px",
      width: "0px",
      background: "red",
    }}
  />
);

const CalendarPicker = () => {
  const { months } = useContext(DatePickerContext);

  return (
    <CalendarWrapper>
      {months?.map((month, index) => {
        const monthNumber = getMonthFromCalendar(month);
        return (
          <MonthView
            key={`month--${monthNumber}`}
            weeks={month}
            month={monthNumber}
          >
            <Box
              sx={{
                height: "20px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {index === 0 ? <PrevMonthBtn /> : <Spacer />}
              <MonthTitle weeks={month} />
              {index === months.length - 1 ? <NextMonthBtn /> : <Spacer />}
            </Box>
          </MonthView>
        );
      })}
    </CalendarWrapper>
  );
};

const CalendarPickerWrapper = ({
  value,
  onSelect,
  disableFuture,
  disableCurrent,
  disablePast,
  dateDisabled,
  currentDate,
  numberOfMonths,
  range,
}: any) => {
  return (
    <DatePickerContextProvider
      value={value}
      onSelect={onSelect}
      numberOfMonths={numberOfMonths}
      disableFuture={disableFuture}
      disableCurrent={disableCurrent}
      disablePast={disablePast}
      dateDisabled={dateDisabled}
      currentDate={currentDate}
      range={range}
    >
      <CalendarPicker />
    </DatePickerContextProvider>
  );
};

export default CalendarPickerWrapper;
