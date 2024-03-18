import "@testing-library/jest-dom";
import { render } from "test-utils/index";
import RangePicker, { RangePickerProps } from ".";

describe("RangePicker", () => {
  let props: RangePickerProps;

  beforeEach(() => {
    props = {
      ...RangePicker.defaultProps,
      id: "single_date_picker",
      label: "Calendar",
      labelPosition: "left",
      format: "MM-DD-YYYY",
      helperText: "Helper Text",
      onChange: jest.fn(),
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<RangePicker {...props} />, {});
    return component;
  };

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();
    expect(inputContainer).toHaveAttribute("id", props.id);
  });

  it("should have placeholder", () => {
    props.placeholder = ["Start date", "End date"];
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();

    const inputs = inputContainer.querySelectorAll("input");
    expect(inputs).toHaveLength(2);
    expect(inputs[0]).toHaveAttribute("placeholder", "Start date");
    expect(inputs[1]).toHaveAttribute("placeholder", "End date");
  });

  it("should have label", () => {
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();
    const label = inputContainer.querySelector(".Input__label");
    expect(label).toHaveTextContent(props.label);
  });

  it("should have helper text", () => {
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();
    const helperText = inputContainer.querySelector(".Input__helper-text");
    expect(helperText).toHaveTextContent(props.helperText);
  });

  // TODO: test values, formats, etc.

  // TODO: test calendar
});
