import ThemeWrapper from "../src/ThemeWrapper";
import { theme } from "../src/theme";

export const withMuiTheme = (Story, context) => {
  console.log("theme", theme);

  return (
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
  );
};
