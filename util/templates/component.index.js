export default (componentName) => ({
  content: `
export { default } from "./${componentName}";
export type { ${componentName}Props } from "./${componentName}.types";
`,
  extension: `index.ts`,
});
