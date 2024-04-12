import { SnackbarProvider } from "../src/Components/Snackbar";
import ThemeWrapper from "../src/Components/ThemeWrapper";
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
