export default (componentName) => ({
  content: `
import { render } from "test-utils/index";
import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("${componentName}", () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      id: "123"
    };
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("${componentName}");
    expect(component).toHaveTextContent(props.id);
  });
});
`,
  extension: `.test.tsx`,
});
