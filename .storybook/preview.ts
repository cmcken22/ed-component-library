import type { Preview } from "@storybook/react";
import { withMuiTheme } from "./with-mui-theme.decorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [withMuiTheme];

export default preview;
