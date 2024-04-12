import "@testing-library/jest-dom";
import { testInputRendering } from "test-utils/commonTestCases";
import { fireEvent, render } from "test-utils/index";
import DatePicker, { DatePickerProps } from ".";

const initialProps: DatePickerProps = {
  ...DatePicker.defaultProps,
  id: "single_date_picker",
  label: "Calendar",
  helperText: "Helper Text",
  placeholder: "Please enter date",
  format: "MM/DD/YYYY",
  labelPosition: "left",
  onChange: jest.fn(),
  onValidation: jest.fn(),
};

describe("DatePicker", () => {
  let props: DatePickerProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: any) => {
    const component = render(<DatePicker {...props} />, {});
    return component;
  };

  testInputRendering(renderComponent, props);

  it("should have placeholder", () => {
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();

    const inputs = inputContainer.querySelectorAll("input");
    expect(inputs).toHaveLength(1);
    expect(inputs[0]).toHaveAttribute("placeholder", props.placeholder);
  });

  it("should have value", () => {
    props.value = new Date("2024-03-15T04:00:00.000Z");
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("date-field-input");
    const input = component.querySelector("input");
    expect(component).toBeInTheDocument();
    const expected = "03/15/2024";
    expect(input).toHaveValue(expected);
  });

  it("should use alternative format", () => {
    props = {
      ...props,
      value: new Date("2024-03-15T04:00:00.000Z"),
      format: "MM-DD-YYYY",
    };
    const { container } = renderComponent(props);
    const input = container.querySelector("input");
    expect(input).toBeInTheDocument();
    const expected = "03-15-2024";
    expect(input).toHaveValue(expected);
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

  it("should render the calendar picker", () => {
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("date-field-input");
    expect(inputContainer).toBeInTheDocument();
    fireEvent.click(inputContainer);
    const calendar = getByTestId("calendar");
    expect(calendar).toBeInTheDocument();
  });

  it("should clicking outside should close the calendar", () => {
    const { container, getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("date-field-input");
    expect(inputContainer).toBeInTheDocument();
    fireEvent.click(inputContainer);
    const calendar = getByTestId("calendar");
    expect(calendar).toBeInTheDocument();

    fireEvent.click(document);
    const calendarNow = container.querySelector('[data-testid="calendar"]');
    expect(calendarNow).not.toBeInTheDocument();
  });

  it("should render the calendar picker open by default", () => {
    props.calendarOpen = true;
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId("calendar");
    expect(calendar).toBeInTheDocument();
  });

  it("should hide the calendar", () => {
    props.hideCalendarPicker = true;
    const { container, getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("date-field-input");
    expect(inputContainer).toBeInTheDocument();
    fireEvent.click(inputContainer);
    const calendar = container.querySelector('[data-testid="calendar"]');
    expect(calendar).not.toBeInTheDocument();
  });

  it("should disable input", () => {
    props.disableTextInput = true;
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("date-field-input");
    expect(inputContainer).toBeInTheDocument();
    const input = inputContainer.querySelector("input");
    expect(input).toHaveAttribute("readonly");
  });

  it("should disable current date", () => {
    props = {
      ...props,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      value: new Date("2024-03-15T04:00:00.000Z"),
      disableCurrent: true,
    };
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();
    expect(props.onValidation).toHaveBeenCalledWith(false);
  });

  it("should disable past dates", () => {
    props = {
      ...props,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      value: new Date("2024-03-14T04:00:00.000Z"),
      disablePast: true,
    };
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();
    expect(props.onValidation).toHaveBeenCalledWith(false);
  });

  it("should disable future dates", () => {
    props = {
      ...props,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      value: new Date("2024-03-17T04:00:00.000Z"),
      disableFuture: true,
    };
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();
    expect(props.onValidation).toHaveBeenCalledWith(false);
  });

  it("should disable dates with custom function", () => {
    props = {
      ...props,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      value: new Date("2024-03-01T05:00:00.000Z"),
      dateDisabled: (date: Date) => date.getDate() === 1,
    };
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();
    expect(props.onValidation).toHaveBeenCalledWith(false);
  });

  it("should have call onValidation false for invalid date", () => {
    props = {
      ...props,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      value: new Date("2024-03-01T05:00:00.000Z"),
    };
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();

    const inputs = inputContainer.querySelectorAll("input");
    expect(inputs).toHaveLength(1);

    // april 31st is an invalid date
    fireEvent.change(inputs[0], { target: { value: "04/31/2024" } });

    expect(props.onValidation).toHaveBeenCalledWith(false);
  });
});
