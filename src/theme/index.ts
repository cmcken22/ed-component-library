import { createTheme, useTheme } from "@mui/material";
import BaseInputTheme from "src/BaseInput/BaseInput.theme";
import ButtonTheme from "src/Button/Button.theme";
import CheckboxTheme from "src/Checkbox/Checkbox.theme";
import DropdownTheme, { DropdownListTheme } from "src/Dropdown/Dropdown.theme";
import RadioButtonTheme from "src/RadioButton/RadioButton.theme";
import TabsTheme from "src/Tabs/Tabs.theme";
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
    MuiSelect: DropdownTheme,
    MuiTabs: TabsTheme,
    MuiMenu: DropdownListTheme,
  },
});

const useEllisDonTheme = () => {
  const theme = useTheme();
  return theme;
};

const DEFAULT_WIDTHS = {
  RangePicker: "400px",
  Input: "240px",
};

export { Colors, DEFAULT_WIDTHS, palette, theme, useEllisDonTheme };
