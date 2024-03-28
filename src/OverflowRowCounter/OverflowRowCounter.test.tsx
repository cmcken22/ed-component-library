import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import OverflowRowCounter, { OverflowRowCounterProps } from "./";

const initialProps: OverflowRowCounterProps = {
  ...OverflowRowCounter.defaultProps,
};

describe("OverflowRowCounter", () => {
  let props: OverflowRowCounterProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: OverflowRowCounterProps) =>
    render(<OverflowRowCounter {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("OverflowRowCounter");
    expect(component).toHaveAttribute("id", props.id);
  });
});
