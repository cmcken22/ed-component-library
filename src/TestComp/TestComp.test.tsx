
import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import TestComp from "./TestComp";
import { TestCompProps } from "./TestComp.types";

const initialProps: TestCompProps = {
  ...TestComp.defaultProps,
};

describe("TestComp", () => {
  let props: TestCompProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: TestCompProps) => render(<TestComp {...props} />);

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("TestComp");
    expect(component).toHaveTextContent(props.id);
  });
});
