import { useCallback, useContext } from "react";
import { CalendarContext } from "../../Common";
import { isValidDate, numberOfMonthsBetween } from "../../Common/utils";

const useUpdateView = () => {
  const { numberOfMonths, viewing, setViewing } = useContext(CalendarContext);

  const handleUpdateView = useCallback(
    (value: Date) => {
      if (!value || !isValidDate(value)) return;

      // if the number of months is 1, always set the viewing to the value
      if (numberOfMonths === 1) {
        setViewing(value);
        return;
      }
      // otherwise, check of the view needs to be updated or not
      const monthDiff = numberOfMonthsBetween(value, viewing);
      if (monthDiff < 0) {
        setViewing(value);
        return;
      }
      if (monthDiff < numberOfMonths) {
        return;
      }
      setViewing(value);
    },
    [viewing, numberOfMonths, setViewing]
  );

  return handleUpdateView;
};

export default useUpdateView;
