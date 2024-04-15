import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import RangeFilterInput from "./RangeFilter";
import { RangeFilterInputProps } from "./RangeFilter.types";

const initialProps: RangeFilterInputProps = {
  ...RangeFilterInput.defaultProps,
};

describe("RangeFilterInput", () => {
  let props: RangeFilterInputProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: RangeFilterInputProps) =>
    render(<RangeFilterInput {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("RangeFilterInput");
    expect(component).toHaveAttribute("id", props.id);
  });
});
