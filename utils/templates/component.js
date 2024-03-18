export default (componentName) => ({
  content: `
import { Box } from "@mui/material";
import cx from "classnames";
import { ${componentName}Props } from "./${componentName}.types";

const ${componentName} = ({ id, className, sx }: ${componentName}Props) => {
  return (
    <Box
      id={id}
      className={cx('${componentName}', {
        [className]: className,
      })}
      sx={sx}
    >
      TODO: ${componentName}
    </Box>
  );
};

${componentName}.defaultProps = {} as Partial<${componentName}Props>;

export default ${componentName};
`,
  extension: `.tsx`,
});
