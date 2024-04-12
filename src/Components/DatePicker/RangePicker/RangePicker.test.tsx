import "@testing-library/jest-dom";
import { testInputRendering } from "test-utils/commonTestCases";
import { fireEvent, render } from "test-utils/index";
import RangePicker, { RangePickerProps } from ".";

const initialProps: RangePickerProps = {
  ...RangePicker.defaultProps,
  id: "single_date_picker",
  label: "Calendar",
  labelPosition: "left",
  format: "MM/DD/YYYY",
  helperText: "Helper Text",
  onChange: jest.fn(),
  onValidation: jest.fn(),
};

describe("RangePicker", () => {
  let props: RangePickerProps = { ...initialProps };

  beforeEach(() => {
    props = { ...initialProps };
  });

  const renderComponent = (props: any) => {
    const component = render(<RangePicker {...props} />, {});
    return component;
  };

  testInputRendering(renderComponent, props);

  it("should have placeholder", () => {
    props.placeholder = ["Start date", "End date"];
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();

    const inputs = inputContainer.querySelectorAll("input");
    expect(inputs).toHaveLength(2);
    expect(inputs[0]).toHaveAttribute("placeholder", props.placeholder[0]);
    expect(inputs[1]).toHaveAttribute("placeholder", props.placeholder[1]);
  });

  it("should have formatted values", () => {
    props.value = [
      new Date("2024-03-15T04:00:00.000Z"),
      new Date("2024-03-17T04:00:00.000Z"),
    ];
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();

    const inputs = inputContainer.querySelectorAll("input");
    expect(inputs).toHaveLength(2);
    expect(inputs[0]).toHaveAttribute("value", "03/15/2024");
    expect(inputs[1]).toHaveAttribute("value", "03/17/2024");
  });

  it("should have update range", () => {
    props.value = [
      new Date("2024-03-15T04:00:00.000Z"),
      new Date("2024-03-17T04:00:00.000Z"),
    ];
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();

    const inputs = inputContainer.querySelectorAll("input");
    expect(inputs).toHaveLength(2);

    fireEvent.change(inputs[0], { target: { value: "03/16/2024" } });

    expect(props.onChange).toHaveBeenCalledWith([
      new Date("2024-03-16T04:00:00.000Z"),
      new Date("2024-03-17T04:00:00.000Z"),
    ]);

    fireEvent.change(inputs[1], { target: { value: "03/19/2024" } });

    expect(props.onChange).toHaveBeenCalledWith([
      new Date("2024-03-16T04:00:00.000Z"),
      new Date("2024-03-19T04:00:00.000Z"),
    ]);
  });

  it("should have error status for incorrect range", () => {
    props.value = [
      new Date("2024-03-17T04:00:00.000Z"),
      new Date("2024-03-15T04:00:00.000Z"),
    ];
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();
    expect(inputContainer).toHaveAttribute("data-test-status", "error");
    expect(props.onValidation).toHaveBeenCalledWith(false);
  });

  it("should disable current date", () => {
    props = {
      ...props,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      value: [new Date("2024-03-15T04:00:00.000Z")],
      disableCurrent: true,
    };
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();
    expect(inputContainer).toHaveAttribute("data-test-status", "error");
    expect(props.onValidation).toHaveBeenCalledWith(false);
  });

  it("should disable past dates", () => {
    props = {
      ...props,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      value: [new Date("2024-03-14T04:00:00.000Z")],
      disablePast: true,
    };
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();
    expect(inputContainer).toHaveAttribute("data-test-status", "error");
    expect(props.onValidation).toHaveBeenCalledWith(false);
  });

  it("should disable future dates", () => {
    props = {
      ...props,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      value: [new Date("2024-03-17T04:00:00.000Z")],
      disableFuture: true,
    };
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();
    expect(inputContainer).toHaveAttribute("data-test-status", "error");
    expect(props.onValidation).toHaveBeenCalledWith(false);
  });

  it("should disable dates with custom function", () => {
    props = {
      ...props,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      value: [new Date("2024-03-01T05:00:00.000Z")],
      dateDisabled: (date: Date) => date.getDate() === 1,
    };
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();
    expect(inputContainer).toHaveAttribute("data-test-status", "error");
    expect(props.onValidation).toHaveBeenCalledWith(false);
  });

  it("should have error state for invalid date", () => {
    props = {
      ...props,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      value: [new Date("2024-03-01T05:00:00.000Z")],
      dateDisabled: (date: Date) => date.getDate() === 1,
    };
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();

    const inputs = inputContainer.querySelectorAll("input");
    expect(inputs).toHaveLength(2);

    // april 31st is an invalid date
    fireEvent.change(inputs[1], { target: { value: "04/31/2024" } });

    expect(inputContainer).toHaveAttribute("data-test-status", "error");
    expect(props.onValidation).toHaveBeenCalledWith(false);
  });

  it("should render the calendar picker", () => {
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("calendar-input");
    expect(inputContainer).toBeInTheDocument();
    fireEvent.click(inputContainer);
    const calendar = getByTestId("calendar");
    expect(calendar).toBeInTheDocument();
  });

  it("should clicking outside should close the calendar", () => {
    const { container, getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("calendar-input");
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
    const inputContainer = getByTestId("calendar-input");
    expect(inputContainer).toBeInTheDocument();
    fireEvent.click(inputContainer);
    const calendar = container.querySelector('[data-testid="calendar"]');
    expect(calendar).not.toBeInTheDocument();
  });

  it("should disable inputs", () => {
    props.disableTextInput = true;
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("calendar-input");
    expect(inputContainer).toBeInTheDocument();
    const inputs = inputContainer.querySelectorAll("input");
    expect(inputs).toHaveLength(2);
    expect(inputs[0]).toHaveAttribute("disabled");
    expect(inputs[1]).toHaveAttribute("disabled");
  });
});
