import { useCallback, useContext, useMemo } from "react";
import { CalendarContext } from "src/DatePicker/Common";
import {
  convertDateToGMT,
  getThisMonth,
  getThisWeek,
  getThisYear,
  subtractMonths,
} from "src/DatePicker/Common/utils";
import useUpdateView from "./useUpdateView";

const useTools = ({ tools, toolFilter }: any) => {
  const { select, currentDate } = useContext(CalendarContext);
  const handleUpdateView = useUpdateView();

  const handleViewToday = useCallback(() => {
    const today = convertDateToGMT(currentDate);
    select(today, true);
    handleUpdateView([today]);
  }, [select, handleUpdateView, currentDate]);

  const handleViewYesterday = useCallback(() => {
    const yesterday = convertDateToGMT(currentDate);
    yesterday.setDate(yesterday.getDate() - 1);
    select(yesterday, true);
    handleUpdateView([yesterday]);
  }, [select, handleUpdateView, currentDate]);

  const handleViewThisWeek = useCallback(() => {
    const [firstDayOfWeek, lastDayOfWeek] = getThisWeek(currentDate);
    select([firstDayOfWeek, lastDayOfWeek], true);
    handleUpdateView([firstDayOfWeek, lastDayOfWeek]);
  }, [select, handleUpdateView]);

  const handleViewThisMonth = useCallback(() => {
    const [firstDayOfMonth, lastDayOfMonth] = getThisMonth(currentDate);
    select([firstDayOfMonth, lastDayOfMonth], true);
    handleUpdateView([firstDayOfMonth, lastDayOfMonth]);
  }, [select, handleUpdateView, currentDate]);

  const handleViewLastMonth = useCallback(() => {
    const [firstDayOfMonth, lastDayOfMonth] = getThisMonth(
      subtractMonths(currentDate, 1)
    );
    select([firstDayOfMonth, lastDayOfMonth], true);
    handleUpdateView([firstDayOfMonth, lastDayOfMonth]);
  }, [select, handleUpdateView, currentDate]);

  const handleViewThisYear = useCallback(() => {
    const [firstDayOfYear, lastDayOfYear] = getThisYear(currentDate);
    select([firstDayOfYear, lastDayOfYear], true);
    handleUpdateView([firstDayOfYear, lastDayOfYear]);
  }, [select, handleUpdateView, currentDate]);

  const handleViewLastYear = useCallback(() => {
    const [firstDayOfYear, lastDayOfYear] = getThisYear(
      subtractMonths(currentDate, 12)
    );
    select([firstDayOfYear, lastDayOfYear], true);
    handleUpdateView([firstDayOfYear, lastDayOfYear]);
  }, [select, handleUpdateView, currentDate]);

  const toolsList = useMemo(() => {
    if (!tools) return [];
    const toolsMap = [
      { label: "Today", onClick: handleViewToday },
      { label: "Yesterday", onClick: handleViewYesterday },
      { label: "This Week", onClick: handleViewThisWeek },
      { label: "This Month", onClick: handleViewThisMonth },
      { label: "Last Month", onClick: handleViewLastMonth },
      { label: "This Year", onClick: handleViewThisYear },
      { label: "Last Year", onClick: handleViewLastYear },
    ];

    if (toolFilter) {
      return toolsMap.filter((tool) => toolFilter(tool?.label));
    }
    return toolsMap;
  }, [
    tools,
    toolFilter,
    handleViewToday,
    handleViewYesterday,
    handleViewThisWeek,
    handleViewThisMonth,
    handleViewLastMonth,
    handleViewThisYear,
    handleViewLastYear,
  ]);

  return toolsList;
};

export default useTools;
