import { useCallback, useContext, useMemo } from "react";
import { CalendarContext } from "src/DatePicker/Common";
import { convertDateToGMT } from "src/DatePicker/Common/utils";
import useUpdateView from "./useUpdateView";
// import useUpdateView from "./useUpdateView";

const useTools = ({ tools, toolFilter }: any) => {
  const { select, currentDate } = useContext(CalendarContext);
  const handleUpdateView = useUpdateView();

  const handleViewToday = useCallback(() => {
    const today = convertDateToGMT(currentDate);
    select(today, true);
    handleUpdateView(today);
  }, [select, handleUpdateView, currentDate]);

  const handleViewYesterday = useCallback(() => {
    const yesterday = convertDateToGMT(currentDate);
    yesterday.setDate(yesterday.getDate() - 1);
    select(yesterday, true);
    handleUpdateView(yesterday);
  }, [select, handleUpdateView, currentDate]);

  const handleViewThisWeek = useCallback(() => {
    handleUpdateView(convertDateToGMT(currentDate));
  }, [handleUpdateView, currentDate]);

  const handleViewThisMonth = useCallback(() => {
    handleUpdateView(convertDateToGMT(currentDate));
  }, [handleUpdateView, currentDate]);

  const handleViewLastMonth = useCallback(() => {
    const lastMonth = convertDateToGMT(currentDate);
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    handleUpdateView(lastMonth);
  }, [handleUpdateView, currentDate]);

  const handleViewThisYear = useCallback(() => {
    handleUpdateView(convertDateToGMT(currentDate));
  }, [handleUpdateView, currentDate]);

  const handleViewLastYear = useCallback(() => {
    const lastYear = convertDateToGMT(currentDate);
    lastYear.setFullYear(lastYear.getFullYear() - 1);
    handleUpdateView(lastYear);
  }, [handleUpdateView, currentDate]);

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
