import "@testing-library/jest-dom";
import { TEST_ID } from "src/enums";
import { render } from "test-utils/index";
import RangeFilterInput from "./RangeFilter";
import { RangeFilterProps } from "./RangeFilter.types";

// @ts-ignore
const initialProps: RangeFilterProps = {
  ...RangeFilterInput.defaultProps,
};

describe("RangeFilterInput", () => {
  let props: RangeFilterProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: RangeFilterProps) =>
    render(<RangeFilterInput {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.BASE_INPUT);
    expect(component).toHaveAttribute("id", props.id);
  });
});
