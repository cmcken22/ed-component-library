export default (componentName) => ({
  content: `
import { ${componentName}Props } from "./${componentName}.types";

const ${componentName} = ({ foo }: ${componentName}Props) => {
  return <div>TODO: ${componentName} {foo}</div>;
};

${componentName}.defaultProps = {};

export default ${componentName};
`,
  extension: `.tsx`,
});
