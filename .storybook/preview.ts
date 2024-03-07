import type { Preview } from "@storybook/react";
import { withMuiTheme } from "./with-mui-theme.decorator";

const preview: Preview = {
  parameters: {
    // basePath: "/ed-component-library/assets",
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
