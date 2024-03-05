import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { theme } from "../theme";
// import "../index.css";

const ThemeWrapper = ({ children }: any) => {
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
