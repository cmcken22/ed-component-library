import "@testing-library/jest-dom";
import { TEST_ID } from "src/enums";
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

  const renderComponent = (props: DateFieldProps) =>
    render(<DateField {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.BASE_INPUT);
    expect(component).toHaveAttribute("id", props.id);
  });
});
