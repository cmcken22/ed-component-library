import { Box, styled } from "@mui/material";

const CalendarWrapper = styled(Box, {
  slot: "root",
})<any>(({ theme }) => {
  return {
    border: "1px solid",
    padding: theme.spacing(2),
    bgcolor: "background.paper",
    borderColor: theme.palette.charcoal["20"],
    borderRadius: "2px",
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(2),
  };
});

export default CalendarWrapper;
