import { Box, styled } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCallback, useContext } from "react";
import Button from "src/Button";
import { CalendarContext } from "src/DatePicker/Common";
import { isValidDate } from "src/DatePicker/Common/utils";
import Icon from "src/Icon";
import useUpdateView from "./useUpdateView";
dayjs.extend(customParseFormat);

const StyledWrapper = styled(Box, {
  slot: "root",
})<any>(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    borderTop: `${theme.shape.borderWidth} solid`,
    borderColor: theme.palette.charcoal["20"],
  };
});

const PreviewSelectionBar = ({ onApply, onCancel }: any) => {
  const { selected, format, select } = useContext(CalendarContext);
  const handleUpdateView = useUpdateView();

  const handleChange = useCallback(
    (date: Date, idx: number) => {
      if (!isValidDate(date)) return;
      const nextSelected = [...selected];
      nextSelected[idx] = date;
      select(nextSelected, true);
      handleUpdateView(nextSelected);
    },
    [selected, select, handleUpdateView]
  );

  return (
    <StyledWrapper>
      <Box display="flex" flexDirection="row">
        <Box sx={{ width: "137px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MuiDatePicker
              format={format}
              disableOpenPicker
              value={selected?.[0] ? dayjs(selected?.[0]) : null}
              onChange={(date: any) => {
                handleChange(date ? date.toDate() : null, 0);
              }}
            />
          </LocalizationProvider>
        </Box>
        <Box display="flex" alignItems="center" mx={0.5}>
          <Icon icon="ArrowRight" size={16} />
        </Box>
        <Box sx={{ width: "137px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MuiDatePicker
              format={format}
              disableOpenPicker
              value={selected?.[1] ? dayjs(selected?.[1]) : null}
              onChange={(date: any) => {
                handleChange(date ? date.toDate() : null, 1);
              }}
            />
          </LocalizationProvider>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" gap="11px" ml={3}>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={() => onApply(selected)}>Apply</Button>
      </Box>
    </StyledWrapper>
  );
};

PreviewSelectionBar.displayName = "PreviewSelectionBar";

export default PreviewSelectionBar;
