import { SnackbarProvider } from "../src/Snackbar";
import ThemeWrapper from "../src/ThemeWrapper";
import "../src/index.css";

export const withMuiTheme = (Story, context) => {
  return (
    <ThemeWrapper>
      <SnackbarProvider domRoot={document.body}>
        <Story />
      </SnackbarProvider>
    </ThemeWrapper>
  );
};
