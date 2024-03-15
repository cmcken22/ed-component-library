import "@testing-library/jest-dom";
import { printHtml } from "test-utils/helper";
import { fireEvent, render } from "test-utils/index";
import DatePicker, { DatePickerProps } from ".";

describe("DatePicker", () => {
  let props: DatePickerProps;

  beforeEach(() => {
    props = {
      ...DatePicker.defaultProps,
      id: "single_date_picker",
      label: "Calendar",
      format: "MM-DD-YYYY",
      labelPosition: "left",
      onChange: jest.fn(),
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<DatePicker {...props} />, {});
    return component;
  };

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const inputContainer = getByTestId("Input");
    expect(inputContainer).toBeInTheDocument();
    printHtml(inputContainer as HTMLElement);
    const component = getByTestId("date-picker");
    expect(component).toBeInTheDocument();
    expect(inputContainer).toHaveAttribute("id", props.id);
  });

  it("should have value", () => {
    props.value = new Date("2024-03-15T04:00:00.000Z");
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("date-picker");
    const input = component.querySelector("input");
    expect(component).toBeInTheDocument();
    const expected = "03-15-2024";
    expect(input).toHaveValue(expected);

    const calendarWrapper = getByTestId("date-picker-box");
    fireEvent.click(calendarWrapper);
    const calendar = getByTestId("single-date-picker-modal");
    expect(calendar).toBeInTheDocument();

    const days = calendar.querySelectorAll('.day:not([disabled=""])');
    expect(days).toHaveLength(31);

    for (let i = 0; i < 31; i++) {
      if (i === 14) {
        expect(days[i]).toHaveAttribute("data-test-dateselected", "true");
      } else {
        expect(days[i]).not.toHaveAttribute("data-test-dateselected", "true");
      }
    }
  });

  it("should use alternative format", () => {
    props = {
      ...props,
      value: new Date("2024-03-15T04:00:00.000Z"),
      format: "MM/DD/YYYY",
    };
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("date-picker");
    const input = component.querySelector("input");
    expect(component).toBeInTheDocument();
    const expected = "03/15/2024";
    expect(input).toHaveValue(expected);
  });

  it("should have calendar", () => {
    props = {
      ...props,
      value: new Date("2024-03-15T04:00:00.000Z"),
      format: "MM/DD/YYYY",
    };
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("date-picker-box");
    fireEvent.click(component);
    const calendar = getByTestId("single-date-picker-modal");
    expect(calendar).toBeInTheDocument();
    const monthTitle = calendar.querySelector(".month-title");
    expect(monthTitle).toBeInTheDocument();
    expect(monthTitle).toHaveTextContent("March 2024");
    const days = calendar.querySelectorAll('.day:not([disabled=""])');
    expect(days).toHaveLength(31);
  });

  it("should have calendar", () => {
    props = {
      ...props,
      value: new Date("2024-03-15T04:00:00.000Z"),
      format: "MM/DD/YYYY",
    };
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("date-picker-box");
    fireEvent.click(component);
    const calendar = getByTestId("single-date-picker-modal");
    expect(calendar).toBeInTheDocument();
    const monthTitle = calendar.querySelector(".month-title");
    expect(monthTitle).toBeInTheDocument();
    expect(monthTitle).toHaveTextContent("March 2024");
    const days = calendar.querySelectorAll('.day:not([disabled=""])');
    expect(days).toHaveLength(31);
  });

  it("should have today higlighted", () => {
    props = {
      ...props,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      format: "MM/DD/YYYY",
    };
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("date-picker-box");
    fireEvent.click(component);
    const calendar = getByTestId("single-date-picker-modal");
    expect(calendar).toBeInTheDocument();
    const monthTitle = calendar.querySelector(".month-title");
    expect(monthTitle).toBeInTheDocument();
    expect(monthTitle).toHaveTextContent("March 2024");
    const days = calendar.querySelectorAll('.day:not([disabled=""])');
    expect(days).toHaveLength(31);
    const today = days[14];
    const todayIndicator = today.querySelector(".today-indicator");
    expect(todayIndicator).toBeInTheDocument();
  });

  it("selecting day from calendar should update value", () => {
    props = {
      ...props,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      format: "MM/DD/YYYY",
    };
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("date-picker-box");
    fireEvent.click(component);
    const calendar = getByTestId("single-date-picker-modal");
    expect(calendar).toBeInTheDocument();
    const monthTitle = calendar.querySelector(".month-title");
    expect(monthTitle).toBeInTheDocument();
    expect(monthTitle).toHaveTextContent("March 2024");
    const days = calendar.querySelectorAll('.day:not([disabled=""])');
    expect(days).toHaveLength(31);
    const today = days[14];
    const todayIndicator = today.querySelector(".today-indicator");
    expect(todayIndicator).toBeInTheDocument();

    fireEvent.click(days[15]);
    expect(props.onChange).toHaveBeenCalledWith(
      new Date("2024-03-16T04:00:00.000Z")
    );
    const input = component.querySelector("input");
    const expected = "03/16/2024";
    expect(input).toHaveValue(expected);
  });

  it("should not render calendar", () => {
    props.hideCalendar = true;
    const { getByTestId, baseElement } = renderComponent(props);
    const component = getByTestId("date-picker-box");
    fireEvent.click(component);
    const calendar = baseElement.querySelector(".single-date-picker-modal");
    expect(calendar).toBeNull();
  });

  it("past dates to be disabled", () => {
    props = {
      ...props,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      disablePast: true,
    };
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("date-picker-box");
    fireEvent.click(component);
    const calendar = getByTestId("single-date-picker-modal");
    expect(calendar).toBeInTheDocument();
    const monthTitle = calendar.querySelector(".month-title");
    expect(monthTitle).toBeInTheDocument();
    expect(monthTitle).toHaveTextContent("March 2024");
    const days = calendar.querySelectorAll(
      '.day:not([data-test-outofmonth="true"])'
    );
    expect(days).toHaveLength(31);

    for (let i = 0; i < 14; i++) {
      expect(days[i]).toHaveAttribute("disabled");
    }
    for (let i = 14; i < 31; i++) {
      expect(days[i]).not.toHaveAttribute("disabled");
    }
  });

  it("future dates to be disabled", () => {
    props = {
      ...props,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      disableFuture: true,
    };
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("date-picker-box");
    fireEvent.click(component);
    const calendar = getByTestId("single-date-picker-modal");
    expect(calendar).toBeInTheDocument();
    const monthTitle = calendar.querySelector(".month-title");
    expect(monthTitle).toBeInTheDocument();
    expect(monthTitle).toHaveTextContent("March 2024");
    const days = calendar.querySelectorAll(
      '.day:not([data-test-outofmonth="true"])'
    );
    expect(days).toHaveLength(31);

    for (let i = 0; i < 15; i++) {
      expect(days[i]).not.toHaveAttribute("disabled");
    }
    for (let i = 15; i < 31; i++) {
      expect(days[i]).toHaveAttribute("disabled");
    }
  });

  it("future disable current", () => {
    props = {
      ...props,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      disableCurrent: true,
    };
    const { getByTestId } = renderComponent(props);
    const component = getByTestId("date-picker-box");
    fireEvent.click(component);
    const calendar = getByTestId("single-date-picker-modal");
    expect(calendar).toBeInTheDocument();
    const monthTitle = calendar.querySelector(".month-title");
    expect(monthTitle).toBeInTheDocument();
    expect(monthTitle).toHaveTextContent("March 2024");
    const days = calendar.querySelectorAll(
      '.day:not([data-test-outofmonth="true"])'
    );
    expect(days).toHaveLength(31);

    for (let i = 0; i <= 30; i++) {
      if (i < 14) {
        expect(days[i]).not.toHaveAttribute("disabled");
      } else if (i === 14) {
        expect(days[i]).toHaveAttribute("disabled");
      } else {
        expect(days[i]).not.toHaveAttribute("disabled");
      }
    }
  });
});
