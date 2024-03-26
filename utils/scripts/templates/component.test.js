export default (componentName) => ({
  content: `
import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

const initialProps: ${componentName}Props = {
  ...${componentName}.defaultProps,
};

describe("${componentName}", () => {
  let props: ${componentName}Props = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: ${componentName}Props) => render(<${componentName} {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("${componentName}");
    expect(component).toHaveTextContent(props.id);
  });
});
`,
  extension: `.test.tsx`,
});
