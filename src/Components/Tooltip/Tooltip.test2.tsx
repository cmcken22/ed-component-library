import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import Tooltip from ".";
import { TooltipProps } from "./Tooltip.types";

const initialProps: TooltipProps = {
  ...Tooltip.defaultProps,
};

describe("Tooltip", () => {
  let props: TooltipProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: TooltipProps) =>
    render(<Tooltip {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("Tooltip");
    expect(component).toHaveAttribute("id", props.id);
  });
});
