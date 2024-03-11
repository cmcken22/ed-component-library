import { SnackbarProvider } from "../src/Snackbar";
import ThemeWrapper from "../src/ThemeWrapper";

export const withMuiTheme = (Story, context) => {
  return (
    <ThemeWrapper>
      <SnackbarProvider>
        <Story />
      </SnackbarProvider>
    </ThemeWrapper>
  );
};
