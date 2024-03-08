import { Box } from "@mui/material";
import { createContext, useCallback, useContext, useMemo } from "react";
import { useLilius } from "use-lilius";

export const numberToMonth = (num: number) => {
  const monthMap = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  return monthMap?.[num];
};

export const getFirstDay = (weeks: any) => {
  for (let i = 0; i < weeks.length; i++) {
    const week = weeks[i];
    for (let j = 0; j < week.length; j++) {
      const day = week[j];
      if (new Date(day).getDate() === 1) {
        return day;
      }
    }
  }
};

export const WeeklyHeader = () => {
  return (
    <Box display={"flex"} flexDirection={"row"}>
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => {
        return (
          <Box
            key={day}
            sx={{
              height: "40px",
              width: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "lightgrey",
            }}
          >
            {day}
          </Box>
        );
      })}
    </Box>
  );
};

export const WeekView = ({ week }: any) => {
  const { onSelect, viewing, getDateSelected } = useContext(DatePickerContext);

  console.log("viewing:", viewing);

  return (
    <Box display={"flex"} flexDirection={"row"}>
      {week?.map((day) => {
        const dateSelected = getDateSelected(day);
        const outOfMonth = day.getTime() < viewing?.getTime();
        return (
          <Box
            // key={`${month}--${i}--${j}--${selected?.length}`}
            onClick={() => onSelect(day)}
            sx={{
              height: "40px",
              width: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              opacity: outOfMonth && !dateSelected ? 0.5 : 1,
              backgroundColor: dateSelected ? "lightblue" : "lightgrey",
            }}
          >
            {new Date(day).getDate()}
          </Box>
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
    <p>
      {numberToMonth(month)} {year}
    </p>
  );
};

export const NextMonthBtn = () => {
  const { viewNextMonth } = useContext(DatePickerContext);
  return (
    <Box
      onClick={viewNextMonth}
      sx={{
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        background: "rgba(255, 0, 255, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {">"}
    </Box>
  );
};

export const PrevMonthBtn = () => {
  const { viewPreviousMonth } = useContext(DatePickerContext);
  return (
    <Box
      onClick={viewPreviousMonth}
      sx={{
        height: "40px",
        width: "40px",
        borderRadius: "50%",
        background: "rgba(255, 0, 255, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {"<"}
    </Box>
  );
};

export const MonthView = ({ weeks, children }: any) => {
  return (
    <Box>
      {children}
      <WeeklyHeader />
      {weeks?.map((week, i) => {
        return <WeekView week={week} key={i} />;
      })}
    </Box>
  );
};

type DatePickerContext = {
  selected: Date[] | undefined;
  onSelect: (date: Date) => void;
  selectedDateStrings: string[] | undefined;
  viewNextMonth: () => void;
  viewPreviousMonth: () => void;
  viewing: Date | undefined;
  getDateSelected: (date: Date) => boolean | undefined;
};

const defaultContext: DatePickerContext = {
  selected: undefined,
  selectedDateStrings: undefined,
  onSelect: () => {},
  viewNextMonth: () => {},
  viewPreviousMonth: () => {},
  viewing: undefined,
  getDateSelected: () => false,
};

export const DatePickerContext =
  createContext<DatePickerContext>(defaultContext);

const DatePicker = ({ onSelect }: any) => {
  const {
    calendar,
    selected,
    viewNextMonth,
    viewPreviousMonth,
    // viewing,
    ...x
  } = useLilius({
    numberOfMonths: 1,
  });

  const selectedDateStrings = useMemo(() => {
    return selected?.map((date) => date.toISOString());
  }, [selected]);

  const handelSelectDate = useCallback(
    (date: Date) => {
      if (selected?.includes(date) && selected?.length === 1) {
        if (onSelect) onSelect(null);
        x.select([], true);
        return;
      }
      if (onSelect) onSelect(date);
      x.select(date, true);
    },
    [x.select, selected, onSelect]
  );

  const getDateSelected = useCallback(
    (date: Date) => {
      return selected?.includes(date);
    },
    [selected]
  );

  return (
    <DatePickerContext.Provider
      value={{
        selected,
        selectedDateStrings,
        onSelect: handelSelectDate,
        viewNextMonth,
        viewPreviousMonth,
        viewing: new Date(),
        getDateSelected,
      }}
    >
      <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
        <MonthView weeks={calendar?.[0]}>
          <Box
            sx={{
              height: "40px",
              width: "100%",
              background: "red",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <PrevMonthBtn />
            <MonthTitle weeks={calendar?.[0]} />
            <NextMonthBtn />
          </Box>
        </MonthView>
      </Box>
    </DatePickerContext.Provider>
  );
};

export default DatePicker;
