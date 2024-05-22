import { useCallback, useContext, useRef } from "react";
import { CalendarContext } from "../../Common";
import {
  findDiffIndex,
  isValidDate,
  numberOfMonthsBetween,
  sorteDates,
  subtractMonths,
} from "../../Common/utils";

const useUpdateView = () => {
  const { numberOfMonths, viewing, setViewing } = useContext(CalendarContext);
  const prevValue = useRef<Date[]>([]);

  const setDateInCalendarView = useCallback(
    (date: Date, viewing: Date) => {
      const monthDiff = numberOfMonthsBetween(date, viewing);
      if (monthDiff >= 0 && monthDiff < numberOfMonths) {
        return;
      }
      if (monthDiff > 0) {
        const prevMonth = subtractMonths(date, numberOfMonths - 1);
        setViewing(prevMonth);
        return;
      }
      setViewing(date);
    },
    [setViewing]
  );

  const handleUpdateView = useCallback(
    (value: Date[]) => {
      const diffIndex = findDiffIndex(prevValue.current, value);
      prevValue.current = value;

      const d1 = value?.[0];
      const d2 = value?.[1];

      if (d1 && d2) {
        const monthDiff1 = numberOfMonthsBetween(d1, viewing);
        const monthDiff2 = numberOfMonthsBetween(d2, viewing);

        let count = 0;
        if (monthDiff1 >= 0 && monthDiff1 < numberOfMonths) {
          count++;
        }
        if (monthDiff2 >= 0 && monthDiff2 < numberOfMonths) {
          count++;
        }
        if (count === 2) {
          return;
        }

        // can they both fit in the range?
        const monthDiffRange = numberOfMonthsBetween(d1, d2, true);
        if (monthDiffRange < numberOfMonths) {
          const smallest = [...value]?.sort(sorteDates)?.[0];
          setViewing(smallest);
          return;
        }

        const updatedDate = diffIndex === 0 ? d1 : d2;
        const diff = diffIndex === 0 ? monthDiff1 : monthDiff2;

        if (diff <= 0) {
          setViewing(updatedDate);
          return;
        }
        const prevMonth = subtractMonths(updatedDate, numberOfMonths - 1);
        setViewing(prevMonth);
        return;
      }

      if (d2 && !d1 && diffIndex === 1) {
        setDateInCalendarView(d2, viewing);
        return;
      } else if (d1 && !d2 && diffIndex === 0) {
        setDateInCalendarView(d1, viewing);
        return;
      } else {
        const validDate = value?.find((d: Date) => isValidDate(d));
        if (validDate) {
          setDateInCalendarView(validDate, viewing);
          return;
        }
      }
    },
    [numberOfMonths, setViewing, viewing]
  );

  return handleUpdateView;
};

export default useUpdateView;
