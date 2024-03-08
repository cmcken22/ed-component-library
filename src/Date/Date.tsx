import { Box } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useLilius } from "use-lilius";
import { Button } from "..";
import { DateProps } from "./Date.types";

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

const DateField = ({ foo }: DateProps) => {
  const { calendar, selected, ...x } = useLilius({
    numberOfMonths: 2,
  });
  const firstDaySelected = useMemo(() => {
    return Boolean(selected?.[0]);
  }, [selected]);
  const lastDaySelected = useMemo(() => {
    return Boolean(selected?.[1]);
  }, [selected]);

  console.log("selected:", selected);

  const getFirstDay = useCallback((weeks: any) => {
    for (let i = 0; i < weeks.length; i++) {
      const week = weeks[i];
      for (let j = 0; j < week.length; j++) {
        const day = week[j];
        if (new Date(day).getDate() === 1) {
          return day;
        }
      }
    }
  }, []);

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
      // else if (selected?.length === 1) {
      //   // if (date.getTime() > selected[0].getTime()) {
      //   //   x.select(date, true);
      //   // } else {
      //   // }
      //   x.select(date, false);
      // } else if (selected?.length == 2) {
      //   console.clear();
      //   const sortedDates = selected?.sort((a, b) => a.getTime() - b.getTime());
      //   const first = sortedDates[0];
      //   const last = sortedDates[1];

      //   console.log("first:", first);
      //   console.log("last:", last);
      //   console.log("date:", date);

      //   const nextSelected: Date[] = [];
      //   // if (date.getTime() === first.getTime()) {
      //   //   console.log("REMOVE FIRST");
      //   //   nextSelected.push(last);
      //   // } else if (date.getTime() === last.getTime()) {
      //   //   console.log("REMOVE LAST");
      //   //   nextSelected.push(first);
      //   // }

      //   // if date selected is less than the first date
      //   // add it to the beginning of the array
      //   if (date.getTime() < first.getTime()) {
      //     console.log("ADD TO BEGINNING");
      //     nextSelected.push(date);
      //     nextSelected.push(last);
      //   } else if (date.getTime() > last.getTime()) {
      //     console.log("ADD TO END");
      //     nextSelected.push(first);
      //     nextSelected.push(date);
      //   } else if (
      //     date.getTime() > first.getTime() &&
      //     date.getTime() < last.getTime()
      //   ) {
      //     console.log("MAKE NEW BEGINNING");
      //     nextSelected.push(date);
      //     nextSelected.push(last);
      //   }
      //   x.select(nextSelected, true);
      //   // else {
      //   //   x.select(date, false);
      //   // }

      //   // if date selected is greater than the last date
      //   // add it to the end of the array

      //   // if (date.getTime() < first.getTime()) {
      //   //   x.select(date, false);
      //   // } else if (date.getTime() > last.getTime()) {
      //   //   x.select(date, true);
      //   // } else {
      //   //   x.select(date, false);
      //   // }
      // }
    },
    [x.select, selected]
  );

  return (
    <div key={selected?.length}>
      <Button onClick={() => x.viewPreviousMonth()}>Previous Month</Button>
      <Button onClick={() => x.viewNextMonth()}>Next Month</Button>
      {calendar?.map((monthArr, i) => {
        const firstDay = getFirstDay(monthArr);
        // const first = new Date(firstDay);
        const month = new Date(firstDay).getMonth();
        const year = new Date(firstDay).getFullYear();
        console.log("month:", month);
        console.log("firstDay:", firstDay);
        return (
          <Box key={`month--${i}--${selected?.length}`}>
            <p>
              Month: {numberToMonth(month)} {year}
            </p>
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
            {monthArr?.map((week, i) => {
              const days = week?.map((day, j) => {
                // const dateSelected = selected?.includes(day);
                const dateSelected =
                  selectedDateStrings?.includes(day.toISOString()) ||
                  getDateWithinRange(day);
                // const dateSelected =
                //   day.toISOString() === "2024-04-01T04:00:00.000Z";
                const outOfMonth = new Date(day).getMonth() !== month;
                // if (day.toISOString() === "2024-04-01T04:00:00.000Z") {
                //   console.log("selected:", selected);
                //   console.log("day:", day, dateSelected);
                //   for (let i = 0; i < selected?.length; i++) {
                //     console.log(`selected[${i}]:`, selected[i] === day);
                //   }
                // }

                return (
                  <Box
                    key={`${month}--${i}--${j}--${selected?.length}`}
                    onClick={() => handelSelectDate(day)}
                    sx={{
                      height: "40px",
                      width: "40px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      opacity: outOfMonth ? 0.5 : 1,
                      backgroundColor: dateSelected ? "lightblue" : "lightgrey",
                    }}
                  >
                    {new Date(day).getDate()}
                  </Box>
                );
              });
              return (
                <>
                  <Box
                    key={`${i}--${selected?.length}`}
                    display={"flex"}
                    flexDirection={"row"}
                  >
                    {days}
                  </Box>
                </>
              );
            })}
          </Box>
        );
      })}
    </div>
  );
};

DateField.defaultProps = {};

export default DateField;
