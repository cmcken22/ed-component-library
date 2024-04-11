
import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import DateField from "./DateField";
import { DateFieldProps } from "./DateField.types";

const initialProps: DateFieldProps = {
  ...DateField.defaultProps,
};

describe("DateField", () => {
  let props: DateFieldProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: DateFieldProps) => render(<DateField {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("DateField");
    expect(component).toHaveAttribute("id", props.id);
  });
});
