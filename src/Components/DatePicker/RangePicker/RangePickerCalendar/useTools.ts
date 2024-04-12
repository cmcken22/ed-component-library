import { useCallback, useContext, useMemo } from "react";
import { CalendarContext } from "src/Components/DatePicker/Common";
import {
  convertDateToGMT,
  getThisMonth,
  getThisWeek,
  getThisYear,
  subtractMonths,
} from "src/Components/DatePicker/Common/utils";
import useUpdateView from "./useUpdateView";

const useTools = ({ tools, toolFilter, onSelect }: any) => {
  const { select, currentDate } = useContext(CalendarContext);
  const handleUpdateView = useUpdateView();

  const handleViewToday = useCallback(() => {
    const today = convertDateToGMT(currentDate);
    select(today, true);
    onSelect([today, null]);
    handleUpdateView([today]);
  }, [select, handleUpdateView, currentDate, onSelect]);

  const handleViewYesterday = useCallback(() => {
    const yesterday = convertDateToGMT(currentDate);
    yesterday.setDate(yesterday.getDate() - 1);
    select(yesterday, true);
    onSelect([yesterday, null]);
    handleUpdateView([yesterday]);
  }, [select, handleUpdateView, currentDate, onSelect]);

  const handleViewThisWeek = useCallback(() => {
    const [firstDayOfWeek, lastDayOfWeek] = getThisWeek(currentDate);
    select([firstDayOfWeek, lastDayOfWeek], true);
    onSelect([firstDayOfWeek, lastDayOfWeek]);
    handleUpdateView([firstDayOfWeek, lastDayOfWeek]);
  }, [select, handleUpdateView, onSelect]);

  const handleViewThisMonth = useCallback(() => {
    const [firstDayOfMonth, lastDayOfMonth] = getThisMonth(currentDate);
    select([firstDayOfMonth, lastDayOfMonth], true);
    onSelect([firstDayOfMonth, lastDayOfMonth]);
    handleUpdateView([firstDayOfMonth, lastDayOfMonth]);
  }, [select, handleUpdateView, currentDate, onSelect]);

  const handleViewLastMonth = useCallback(() => {
    const [firstDayOfMonth, lastDayOfMonth] = getThisMonth(
      subtractMonths(currentDate, 1)
    );
    select([firstDayOfMonth, lastDayOfMonth], true);
    onSelect([firstDayOfMonth, lastDayOfMonth]);
    handleUpdateView([firstDayOfMonth, lastDayOfMonth]);
  }, [select, handleUpdateView, currentDate, onSelect]);

  const handleViewThisYear = useCallback(() => {
    const [firstDayOfYear, lastDayOfYear] = getThisYear(currentDate);
    select([firstDayOfYear, lastDayOfYear], true);
    onSelect([firstDayOfYear, lastDayOfYear]);
    handleUpdateView([firstDayOfYear, lastDayOfYear]);
  }, [select, handleUpdateView, currentDate, onSelect]);

  const handleViewLastYear = useCallback(() => {
    const [firstDayOfYear, lastDayOfYear] = getThisYear(
      subtractMonths(currentDate, 12)
    );
    select([firstDayOfYear, lastDayOfYear], true);
    onSelect([firstDayOfYear, lastDayOfYear]);
    handleUpdateView([firstDayOfYear, lastDayOfYear]);
  }, [select, handleUpdateView, currentDate, onSelect]);

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
