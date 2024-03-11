import { Box } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useLilius } from "use-lilius";
import {
  DatePickerContext,
  MonthTitle,
  MonthView,
  NextMonthBtn,
  PrevMonthBtn,
} from "./DatePicker";

const numberToMonth = (num: number) => {
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

const DateRangePicker = () => {
  const {
    calendar,
    selected,
    viewNextMonth,
    viewPreviousMonth,
    viewing,
    ...x
  } = useLilius({
    numberOfMonths: 2,
  });

  const selectedDateStrings = useMemo(() => {
    return selected?.map((date) => date.toISOString());
  }, [selected]);

  const selectedDateRange = useMemo(() => {
    const sortedDates = selected?.sort((a, b) => a.getTime() - b.getTime());
    return sortedDates;
  }, [selected]);

  const getDateWithinRange = useCallback(
    (date: Date) => {
      if (selectedDateRange?.length === 1) {
        return date.getTime() === selectedDateRange[0].getTime();
      }
      if (selectedDateRange?.length >= 2) {
        return (
          date.getTime() >= selectedDateRange[0].getTime() &&
          date.getTime() <=
            selectedDateRange[selectedDateRange?.length - 1].getTime()
        );
      }
    },
    [selectedDateRange]
  );

  const handelSelectDate = useCallback(
    (date: Date) => {
      if (selected?.includes(date) && selected?.length === 1) {
        console.log("REMOVE DATE");
        x.select(
          selected?.filter((d) => d !== date),
          true
        );
        return;
      }

      if (selected?.length === 0) {
        x.select(date, true);
      }

      if (selected?.length === 1) {
        if (date.getTime() > selected[0].getTime()) {
          x.select([selected[0], date], true);
          return;
        }
      }

      const sortedDates = selected?.sort((a, b) => a.getTime() - b.getTime());
      const first = sortedDates[0];
      const last = sortedDates?.[1];

      if (date.getTime() === first.getTime()) {
        x.select([first], true);
        return;
      }
      if (date.getTime() === last?.getTime()) {
        x.select([first], true);
        return;
      }
      if (date.getTime()! < first.getTime()) {
        return;
      }

      x.select([first, date], true);
    },
    [x.select, selected]
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
        getDateInRange: getDateWithinRange,
      }}
    >
      <Box
        sx={{
          border: 1,
          p: 2,
          bgcolor: "background.paper",
          borderColor: "charcoal.20",
          borderRadius: "2px",
        }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            display: "flex",
            // alignItems: "center",
            gap: 1,
          }}
        >
          {calendar?.map((weeks, index) => {
            return (
              <MonthView key={index} weeks={weeks}>
                <Box
                  sx={{
                    height: "20px",
                    width: "100%",
                    background: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  {index === 0 && <PrevMonthBtn />}
                  <MonthTitle weeks={weeks} />
                  {index === calendar?.length - 1 && <NextMonthBtn />}
                </Box>
              </MonthView>
            );
          })}
        </Box>
      </Box>
    </DatePickerContext.Provider>
  );
};

export default DateRangePicker;
