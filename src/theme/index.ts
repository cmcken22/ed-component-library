import { Theme, createTheme, useTheme } from "@mui/material";
import BaseInputTheme from "src/BaseInput/BaseInput.theme";
import ButtonTheme from "src/Button/Button.theme";
import CheckboxTheme from "src/Checkbox/Checkbox.theme";
import RadioButtonTheme from "src/RadioButton/RadioButton.theme";
import SelectTheme, { SelectListTheme } from "src/Select/Select/Select.theme";
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
    MuiSelect: SelectTheme,
    MuiTabs: TabsTheme,
    MuiMenu: SelectListTheme,
  },
  shape: {
    borderRadius: 4,
    borderWidth: "1px",
  } as Partial<Theme["shape"]>,
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
