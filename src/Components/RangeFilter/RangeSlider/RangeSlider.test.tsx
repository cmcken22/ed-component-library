import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import RangeSlider from "./RangeSlider";
import { RangeSliderProps } from "./RangeSlider.types";

// @ts-ignore
const initialProps: RangeSliderProps = {
  ...RangeSlider.defaultProps,
};

describe("RangeSlider", () => {
  let props: RangeSliderProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: RangeSliderProps) =>
    render(<RangeSlider {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("RangeSlider");
    expect(component).toHaveAttribute("id", props.id);
  });
});
