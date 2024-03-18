export default (componentName) => ({
  content: `
import { SxProps } from "@mui/material";

export interface ${componentName}Props {
  id?: string;
  className?: string;
  sx?: SxProps;
}
`,
  extension: `.types.ts`,
});
