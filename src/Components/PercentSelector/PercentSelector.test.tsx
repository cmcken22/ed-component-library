import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import PercentSelector from "./PercentSelector";
import { PercentSelectorProps } from "./PercentSelector.types";

const initialProps: PercentSelectorProps = {
  ...PercentSelector.defaultProps,
};

describe("PercentSelector", () => {
  let props: PercentSelectorProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: PercentSelectorProps) =>
    render(<PercentSelector {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Input");
    expect(component).toHaveAttribute("id", props.id);
  });
});
