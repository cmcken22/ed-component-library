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
  },
});

const useEllisDonTheme = () => {
  const theme = useTheme();
  return theme;
};

export { Colors, palette, theme, useEllisDonTheme };
