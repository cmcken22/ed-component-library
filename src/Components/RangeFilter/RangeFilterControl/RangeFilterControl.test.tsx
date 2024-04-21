import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import RangeFilterControl from "./RangeFilterControl";
import { RangeFilterControlProps } from "./RangeFilterControl.types";

// @ts-ignore
const initialProps: RangeFilterControlProps = {
  ...RangeFilterControl.defaultProps,
};

describe("RangeFilterControl", () => {
  let props: RangeFilterControlProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: RangeFilterControlProps) =>
    render(<RangeFilterControl {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("RangeFilterControl");
    expect(component).toHaveAttribute("id", props.id);
  });
});
