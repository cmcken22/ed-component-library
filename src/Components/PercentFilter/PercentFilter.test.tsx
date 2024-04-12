import "@testing-library/jest-dom";
import { TEST_ID } from "src/enums";
import { render } from "test-utils/index";
import PercentFilter from "./PercentFilter";
import { PercentFilterProps } from "./PercentFilter.types";

const initialProps: PercentFilterProps = {
  ...PercentFilter.defaultProps,
};

describe("PercentFilter", () => {
  let props: PercentFilterProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: PercentFilterProps) =>
    render(<PercentFilter {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.BASE_INPUT);
    expect(component).toHaveAttribute("id", props.id);
  });
});
