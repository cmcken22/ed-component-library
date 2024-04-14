
import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import HorizontalStack from "./HorizontalStack";
import { HorizontalStackProps } from "./HorizontalStack.types";

const initialProps: HorizontalStackProps = {
  ...HorizontalStack.defaultProps,
};

describe("HorizontalStack", () => {
  let props: HorizontalStackProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: HorizontalStackProps) => render(<HorizontalStack {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("HorizontalStack");
    expect(component).toHaveAttribute("id", props.id);
  });
});
