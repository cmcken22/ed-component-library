import { createTheme, useTheme } from "@mui/material";
import BaseInputTheme from "src/BaseInput/BaseInput.theme";
import ButtonTheme from "src/Button/Button.theme";
import CheckboxTheme from "src/Checkbox/Checkbox.theme";
import DropdownTheme from "src/Dropdown/Dropdown.theme";
import RadioButtonTheme from "src/RadioButton/RadioButton.theme";
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
    // TODO: try setting the theme for these components
    // MuiMenuItem:
    // MuiMenuList:
  },
});

const useEllisDonTheme = () => {
  const theme = useTheme();
  return theme;
};

const DEFAULT_WIDTHS = {
  INPUT: "240px",
};

export { Colors, DEFAULT_WIDTHS, palette, theme, useEllisDonTheme };
