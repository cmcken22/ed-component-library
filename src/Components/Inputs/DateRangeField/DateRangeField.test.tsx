import "@testing-library/jest-dom";
import { TEST_ID } from "src/enums";
import { fireEvent, render } from "test-utils/index";
import DateRangeField from "./DateRangeField";
import { DateRangeFieldProps } from "./DateRangeField.types";

const initialProps: DateRangeFieldProps = {
  ...DateRangeField.defaultProps,
  onChange: jest.fn(),
};

describe("DateRangeField", () => {
  let props: DateRangeFieldProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: DateRangeFieldProps) =>
    render(<DateRangeField {...props} />);

  it("should render correctly", () => {
    props.id = "test";
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.BASE_INPUT);
    expect(component).toHaveAttribute("id", props.id);
  });

  it("should allow clear", () => {
    props.allowClear = true;
    props.value = [new Date(), new Date()];
    const { getByTestId } = renderComponent(props);
    const component = getByTestId(TEST_ID.BASE_INPUT);

    const clearIcons = component.querySelectorAll(`.ClearFieldIcon`);

    for (const clearIcon of clearIcons) {
      expect(clearIcon).toBeInTheDocument();
    }

    const clearIcon1 = clearIcons[0];
    fireEvent.click(clearIcon1);
    expect(props.onChange).toHaveBeenCalledWith([null, props.value[1]]);

    const clearIcon2 = clearIcons[1];
    fireEvent.click(clearIcon2);
    expect(props.onChange).toHaveBeenCalledWith([null, null]);
  });
});
