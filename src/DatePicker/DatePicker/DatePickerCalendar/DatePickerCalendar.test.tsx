import "@testing-library/jest-dom";
import { testIds } from "src/DatePicker/Common";
import { fireEvent, render } from "test-utils/index";
import DatePickerCalendar, { DatePickerCalendarProps } from ".";

describe("DatePickerCalendar", () => {
  let props: DatePickerCalendarProps;

  beforeEach(() => {
    props = {
      ...DatePickerCalendar.defaultProps,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      onSelect: jest.fn(),
      value: undefined,
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<DatePickerCalendar {...props} />, {});
    return component;
  };

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(1);

    for (let i = 0; i < 1; i++) {
      const month = months[i];
      const monthTitle = month.querySelector(".month-title");
      expect(monthTitle).toBeInTheDocument();
      const days = month.querySelectorAll(
        '.day:not([data-test-outofmonth="true"])'
      );
      if (i === 0) {
        expect(monthTitle).toHaveTextContent("March 2024");
        expect(days).toHaveLength(31);
      }
    }

    const today = calendar.querySelector(`[data-test-today="true"]`);
    expect(today).toBeInTheDocument();
    expect(today).toHaveAttribute("data-test-date", "15");
  });

  it("should have date selected", () => {
    props.value = new Date("2024-03-15T04:00:00.000Z");
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(1);

    const march = months[0];
    const march15 = march.querySelector(`[data-test-date="15"]`);

    expect(march15).toHaveAttribute("data-test-selected", "true");
  });

  it("should display month according to selection", () => {
    props.value = new Date("2024-04-15T04:00:00.000Z");
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(1);

    const month = months[0];
    const monthTitle = month.querySelector(".month-title");
    expect(monthTitle).toBeInTheDocument();
    const days = month.querySelectorAll(
      '.day:not([data-test-outofmonth="true"])'
    );
    expect(monthTitle).toHaveTextContent("April 2024");
    expect(days).toHaveLength(30);
  });

  it("should update value", () => {
    props.value = new Date("2024-03-15T04:00:00.000Z");
    // new Date("2024-03-17T04:00:00.000Z")
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(1);

    const march = months[0];
    const march5 = march.querySelector(`[data-test-date="5"]`);
    const march30 = march.querySelector(`[data-test-date="30"]`);
    fireEvent.click(march30);

    expect(props.onSelect).toHaveBeenCalledWith(
      new Date("2024-03-30T04:00:00.000Z")
    );
    expect(march30).toHaveAttribute("data-test-selected", "true");

    fireEvent.click(march5);
    expect(props.onSelect).toHaveBeenCalledWith(
      new Date("2024-03-05T05:00:00.000Z")
    );

    expect(march5).toHaveAttribute("data-test-selected", "true");
  });

  it("should unselect range", () => {
    props.value = new Date("2024-03-15T04:00:00.000Z");
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(1);

    const march = months[0];
    const march15 = march.querySelector(`[data-test-date="15"]`);
    expect(march15).toHaveAttribute("data-test-selected", "true");

    fireEvent.click(march15);
    expect(props.onSelect).toHaveBeenCalledWith(null);
    expect(march15).toHaveAttribute("data-test-selected", "false");
  });

  it("should ignore bad values", () => {
    // @ts-expect-error
    props.value = { test: "123" };
    // check if it ignores the bad data and displays current date
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(1);

    for (let i = 0; i < 1; i++) {
      const month = months[i];
      const monthTitle = month.querySelector(".month-title");
      expect(monthTitle).toBeInTheDocument();
      const days = month.querySelectorAll(
        '.day:not([data-test-outofmonth="true"])'
      );
      if (i === 0) {
        expect(monthTitle).toHaveTextContent("March 2024");
        expect(days).toHaveLength(31);
      }
    }

    const today = calendar.querySelector(`[data-test-today="true"]`);
    expect(today).toBeInTheDocument();
    expect(today).toHaveAttribute("data-test-date", "15");
  });

  it("should render correctly if no values passed", () => {
    props.value = undefined;
    // check if it ignores the bad data and displays current date
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(1);

    for (let i = 0; i < 1; i++) {
      const month = months[i];
      const monthTitle = month.querySelector(".month-title");
      expect(monthTitle).toBeInTheDocument();
      const days = month.querySelectorAll(
        '.day:not([data-test-outofmonth="true"])'
      );
      if (i === 0) {
        expect(monthTitle).toHaveTextContent("March 2024");
        expect(days).toHaveLength(31);
      }
    }

    const today = calendar.querySelector(`[data-test-today="true"]`);
    expect(today).toBeInTheDocument();
    expect(today).toHaveAttribute("data-test-date", "15");
  });

  it("should disable past dates", () => {
    props.disablePast = true;
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(1);

    for (let i = 0; i < 1; i++) {
      const month = months[i];
      const monthTitle = month.querySelector(".month-title");
      expect(monthTitle).toBeInTheDocument();
      const days = month.querySelectorAll(
        '.day:not([data-test-outofmonth="true"])'
      );
      if (i === 0) {
        expect(monthTitle).toHaveTextContent("March 2024");
        expect(days).toHaveLength(31);

        for (let j = 0; j < 31; j++) {
          const day = days[j];
          if (j < 14) {
            expect(day).toHaveAttribute("disabled");
          } else {
            expect(day).not.toHaveAttribute("disabled");
          }
        }
      }
    }
  });

  it("should disable future dates", () => {
    props.disableFuture = true;
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(1);

    for (let i = 0; i < 1; i++) {
      const month = months[i];
      const monthTitle = month.querySelector(".month-title");
      expect(monthTitle).toBeInTheDocument();
      const days = month.querySelectorAll(
        '.day:not([data-test-outofmonth="true"])'
      );
      if (i === 0) {
        expect(monthTitle).toHaveTextContent("March 2024");
        expect(days).toHaveLength(31);

        for (let j = 0; j < 31; j++) {
          const day = days[j];
          if (j < 15) {
            expect(day).not.toHaveAttribute("disabled");
          } else {
            expect(day).toHaveAttribute("disabled");
          }
        }
      }
    }
  });

  it("should disable current date", () => {
    props.disableCurrent = true;
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(1);

    const month = months[0];
    const monthTitle = month.querySelector(".month-title");
    expect(monthTitle).toBeInTheDocument();
    const today = month.querySelector(`[data-test-today="true"]`);
    expect(today).toHaveAttribute("disabled");
  });

  it("should have tool bar", () => {
    props.tools = true;
    const { getByTestId } = renderComponent(props);
    const toolbar = getByTestId("toolbar");
    expect(toolbar).toBeInTheDocument();

    const today = getByTestId("toolbar-item--Today");
    expect(today).toHaveTextContent("Today");
    fireEvent.click(today);
    expect(props.onSelect).toHaveBeenCalledWith(
      new Date("2024-03-15T04:00:00.000Z")
    );

    const calendar = getByTestId(testIds.calendar);
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(1);

    const month = months[0];
    const march15 = month.querySelector(`[data-test-date="15"]`);
    expect(march15).toHaveAttribute("data-test-selected", "true");

    const yesterday = getByTestId("toolbar-item--Yesterday");
    expect(yesterday).toHaveTextContent("Yesterday");
    fireEvent.click(yesterday);
    expect(props.onSelect).toHaveBeenCalledWith(
      new Date("2024-03-14T04:00:00.000Z")
    );
  });
});
