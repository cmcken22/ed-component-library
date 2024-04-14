
import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import RangeFilter from "./RangeFilter";
import { RangeFilterProps } from "./RangeFilter.types";

const initialProps: RangeFilterProps = {
  ...RangeFilter.defaultProps,
};

describe("RangeFilter", () => {
  let props: RangeFilterProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: RangeFilterProps) => render(<RangeFilter {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("RangeFilter");
    expect(component).toHaveAttribute("id", props.id);
  });
});
