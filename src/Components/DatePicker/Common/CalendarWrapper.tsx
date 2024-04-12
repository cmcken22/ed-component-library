import { Box, styled } from "@mui/material";
import { TEST_ID } from "src/enums";

const StyledCalendarWrapper = styled(Box, {
  slot: "root",
})<any>(({ theme }) => {
  return {
    backgroundColor: theme.palette.common.white,
    // border: "1px solid",
    padding: theme.spacing(2),
    bgcolor: "background.paper",
    // borderColor: theme.palette.charcoal["20"],
    // borderRadius: "2px",
    border: "none",
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(2),
  };
});

const CalendarWrapper = ({ children }: any) => {
  return (
    <StyledCalendarWrapper className="calendar" data-testid={TEST_ID.CALENDAR}>
      {children}
    </StyledCalendarWrapper>
  );
};

export default CalendarWrapper;
