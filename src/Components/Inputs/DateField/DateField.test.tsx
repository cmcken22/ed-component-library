import "@testing-library/jest-dom";
import { TEST_ID } from "src/enums";
import { fireEvent, render } from "test-utils/index";
import DateField from "./DateField";
import { DateFieldProps } from "./DateField.types";

const initialProps: DateFieldProps = {
  ...DateField.defaultProps,
  onChange: jest.fn(),
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

  it("should allow clear", () => {
    props.allowClear = true;
    props.value = new Date();
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.CLEAR_FIELD_ICON);
    expect(component).toBeInTheDocument();

    fireEvent.click(component);
    expect(props.onChange).toHaveBeenCalledWith(null);
  });
});
