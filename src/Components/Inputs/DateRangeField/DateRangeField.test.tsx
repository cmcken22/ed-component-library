
import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import DateRangeField from "./DateRangeField";
import { DateRangeFieldProps } from "./DateRangeField.types";

const initialProps: DateRangeFieldProps = {
  ...DateRangeField.defaultProps,
};

describe("DateRangeField", () => {
  let props: DateRangeFieldProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: DateRangeFieldProps) => render(<DateRangeField {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("DateRangeField");
    expect(component).toHaveAttribute("id", props.id);
  });
});
