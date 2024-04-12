import { Theme, createTheme, useTheme } from "@mui/material";
import BaseInputTheme from "src/Components/BaseInput/BaseInput.theme";
import ButtonTheme from "src/Components/Button/Button.theme";
import CheckboxTheme from "src/Components/Checkbox/Checkbox.theme";
import { PaginationItemTheme } from "src/Components/Pagination/Pagination.theme";
import RadioButtonTheme from "src/Components/RadioButton/RadioButton.theme";
import SelectTheme, {
  SelectListTheme,
} from "src/Components/Select/BaseSelect/BaseSelect.theme";
import TabsTheme from "src/Components/Tabs/Tabs.theme";
import typography from "./Typography";
import { Colors, palette } from "./palette";

const theme = createTheme({
  typography,
  palette,
  components: {
    MuiButton: ButtonTheme,
    MuiCheckbox: CheckboxTheme,
    MuiTextField: BaseInputTheme,
    MuiRadio: RadioButtonTheme,
    MuiSelect: SelectTheme,
    MuiTabs: TabsTheme,
    MuiMenu: SelectListTheme,
    // MuiPagination: PaginationTheme,
    MuiPaginationItem: PaginationItemTheme,
  },
  shape: {
    borderRadius: 2,
    borderWidth: "1px",
  } as Partial<Theme["shape"]>,
});

const useEllisDonTheme = () => {
  const theme = useTheme();
  return theme;
};

const DEFAULT_WIDTHS = {
  RangePicker: "400px",
  DateRangeField: "360px",
  Input: "240px",
};

export { Colors, DEFAULT_WIDTHS, palette, theme, useEllisDonTheme };
