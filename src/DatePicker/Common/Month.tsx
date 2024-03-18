import { Box } from "@mui/material";
import { createContext, useCallback, useContext, useMemo } from "react";
import { Icon, Typography } from "../..";
import { CalendarContext } from "./CalendarContextProvider";
import { getFirstDay, numberToMonth } from "./utils";

export const WeeklyHeader = () => {
  return (
    <Box className="weekly-header" display="flex" flexDirection="row">
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

export const Week = ({ children }: any) => {
  return (
    <Box
      className="week"
      display="flex"
      flexDirection="row"
      sx={{
        height: "30px",
      }}
    >
      {children}
    </Box>
  );
};

export const MonthTitle = () => {
  const { weeks } = useContext(MonthContext);
  const firstDayOfMonth = useMemo(() => getFirstDay(weeks), [weeks]);
  const month = new Date(firstDayOfMonth).getMonth();
  const year = new Date(firstDayOfMonth).getFullYear();

  const title = `${numberToMonth(month)} ${year}`;

  return (
    <Typography
      className="month-title"
      variant="bodyS"
      fontWeight="bold"
      preventTextSelection
      data-test-month-title={title}
    >
      {title}
    </Typography>
  );
};

export const NextMonthBtn = () => {
  const { viewNextMonth } = useContext(CalendarContext);

  const handleViewNextMonth = useCallback(
    (e: any) => {
      e.stopPropagation();
      viewNextMonth();
    },
    [viewNextMonth]
  );

  return (
    <Box
      className="next-month-btn"
      onClick={handleViewNextMonth}
      sx={{ cursor: "pointer" }}
    >
      <Icon icon="ArrowRight" height="16px" width="16px" />
    </Box>
  );
};

export const PrevMonthBtn = () => {
  const { viewPreviousMonth } = useContext(CalendarContext);

  const handleViewPrevMonth = useCallback(
    (e: any) => {
      e.stopPropagation();
      viewPreviousMonth();
    },
    [viewPreviousMonth]
  );

  return (
    <Box
      className="prev-month-btn"
      onClick={handleViewPrevMonth}
      sx={{ cursor: "pointer" }}
    >
      <Icon icon="ArrowLeft" height="16px" width="16px" />
    </Box>
  );
};

export type MonthContextType = {
  month: number;
  weeks: Date[];
};

const defaultContext: MonthContextType = {
  month: undefined,
  weeks: [],
};

export const MonthContext = createContext<MonthContextType>(defaultContext);

export const Month = ({ weeks, monthNumber, children }: any) => {
  return (
    <Box className="month" flexDirection="column">
      <MonthContext.Provider
        value={{
          month: monthNumber,
          weeks,
        }}
      >
        {children}
      </MonthContext.Provider>
    </Box>
  );
};

export const MonthViewHeader = ({
  displayPrevMonthBtn,
  displayNextMonthBtn,
}: any) => {
  return (
    <Box
      className="month-header"
      sx={{
        height: "20px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {displayPrevMonthBtn ? <PrevMonthBtn /> : <Spacer />}
      <MonthTitle />
      {displayNextMonthBtn ? <NextMonthBtn /> : <Spacer />}
    </Box>
  );
};

export const Spacer = () => (
  <Box
    sx={{
      height: "16px",
      width: "0px",
      background: "red",
    }}
  />
);

Month.Header = MonthViewHeader;
Month.WeeklyHeader = WeeklyHeader;
Month.Week = Week;
