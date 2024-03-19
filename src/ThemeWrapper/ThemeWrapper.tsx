import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { ThemeWrapperProps } from ".";
import { theme } from "../theme";

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

ThemeWrapper.defaultProps = {};

export default ThemeWrapper;
