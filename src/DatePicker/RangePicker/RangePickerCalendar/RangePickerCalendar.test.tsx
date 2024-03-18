import "@testing-library/jest-dom";
import { testIds } from "src/DatePicker/Common";
import { fireEvent, render } from "test-utils/index";
import RangePickerCalendar, { RangePickerCalendarProps } from ".";

describe("RangePickerCalendar", () => {
  let props: RangePickerCalendarProps;

  beforeEach(() => {
    props = {
      ...RangePickerCalendar.defaultProps,
      currentDate: new Date("2024-03-15T04:00:00.000Z"),
      onSelect: jest.fn(),
      value: [],
    };
  });

  const renderComponent = (props: any) => {
    const component = render(<RangePickerCalendar {...props} />, {});
    return component;
  };

  it("should render correctly", () => {
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(2);

    for (let i = 0; i < 2; i++) {
      const month = months[i];
      const monthTitle = month.querySelector(".month-title");
      expect(monthTitle).toBeInTheDocument();
      const days = month.querySelectorAll(
        '.day:not([data-test-outofmonth="true"])'
      );
      if (i === 0) {
        expect(monthTitle).toHaveTextContent("March 2024");
        expect(days).toHaveLength(31);
      } else {
        expect(monthTitle).toHaveTextContent("April 2024");
        expect(days).toHaveLength(30);
      }
    }

    const today = calendar.querySelector(`[data-test-today="true"]`);
    expect(today).toBeInTheDocument();
    expect(today).toHaveAttribute("data-test-date", "15");
  });

  it("should have range selected", () => {
    props.value = [
      new Date("2024-04-15T04:00:00.000Z"),
      new Date("2024-04-17T04:00:00.000Z"),
    ];
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(2);

    const april = months[1];
    const days = april.querySelectorAll(`[data-test-inrange="true"]`);
    expect(days).toHaveLength(3);

    const firstDay = days[0];
    const lastDay = days[2];

    expect(firstDay).toHaveAttribute("data-test-date", "15");
    expect(firstDay).toHaveAttribute("data-test-selected", "true");
    expect(lastDay).toHaveAttribute("data-test-date", "17");
    expect(lastDay).toHaveAttribute("data-test-selected", "true");
  });

  it("should display month according to selection", () => {
    props.value = [
      new Date("2024-05-15T04:00:00.000Z"),
      new Date("2024-05-17T04:00:00.000Z"),
    ];
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(2);

    for (let i = 0; i < 2; i++) {
      const month = months[i];
      const monthTitle = month.querySelector(".month-title");
      expect(monthTitle).toBeInTheDocument();
      const days = month.querySelectorAll(
        '.day:not([data-test-outofmonth="true"])'
      );
      if (i === 0) {
        expect(monthTitle).toHaveTextContent("May 2024");
        expect(days).toHaveLength(31);
      } else {
        expect(monthTitle).toHaveTextContent("June 2024");
        expect(days).toHaveLength(30);
      }
    }
  });

  it("should update value", () => {
    props.value = [
      new Date("2024-03-15T04:00:00.000Z"),
      new Date("2024-03-17T04:00:00.000Z"),
    ];
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(2);

    const march = months[0];
    const march5 = march.querySelector(`[data-test-date="5"]`);
    const march30 = march.querySelector(`[data-test-date="30"]`);
    fireEvent.click(march30);

    expect(props.onSelect).toHaveBeenCalledWith([
      new Date("2024-03-15T04:00:00.000Z"),
      new Date("2024-03-30T04:00:00.000Z"),
    ]);

    fireEvent.click(march5);
    expect(props.onSelect).toHaveBeenCalledWith([
      new Date("2024-03-05T05:00:00.000Z"),
      new Date("2024-03-30T04:00:00.000Z"),
    ]);

    const days = march.querySelectorAll(`[data-test-inrange="true"]`);
    expect(days).toHaveLength(26);

    const firstDay = days[0];
    const lastDay = days[25];

    expect(firstDay).toHaveAttribute("data-test-date", "5");
    expect(firstDay).toHaveAttribute("data-test-selected", "true");
    expect(lastDay).toHaveAttribute("data-test-date", "30");
    expect(lastDay).toHaveAttribute("data-test-selected", "true");
  });

  it("should select range", () => {
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(2);

    const march = months[0];
    const march5 = march.querySelector(`[data-test-date="5"]`);
    const march30 = march.querySelector(`[data-test-date="30"]`);

    fireEvent.click(march5);
    expect(props.onSelect).toHaveBeenCalledWith([
      new Date("2024-03-05T05:00:00.000Z"),
    ]);

    fireEvent.click(march30);
    expect(props.onSelect).toHaveBeenCalledWith([
      new Date("2024-03-05T05:00:00.000Z"),
      new Date("2024-03-30T04:00:00.000Z"),
    ]);
  });

  it("should unselect range", () => {
    props.value = [
      new Date("2024-03-15T04:00:00.000Z"),
      new Date("2024-03-17T04:00:00.000Z"),
    ];
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(2);

    const march = months[0];
    const march15 = march.querySelector(`[data-test-date="15"]`);
    const march17 = march.querySelector(`[data-test-date="17"]`);

    fireEvent.click(march15);
    expect(props.onSelect).toHaveBeenCalledWith([
      new Date("2024-03-17T04:00:00.000Z"),
    ]);

    fireEvent.click(march17);
    expect(props.onSelect).toHaveBeenCalledWith([]);
  });

  it("should ignore bad values", () => {
    // @ts-expect-error
    props.value = { test: "123" };
    // check if it ignores the bad data and displays current date
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(testIds.calendar);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(2);

    for (let i = 0; i < 2; i++) {
      const month = months[i];
      const monthTitle = month.querySelector(".month-title");
      expect(monthTitle).toBeInTheDocument();
      const days = month.querySelectorAll(
        '.day:not([data-test-outofmonth="true"])'
      );
      if (i === 0) {
        expect(monthTitle).toHaveTextContent("March 2024");
        expect(days).toHaveLength(31);
      } else {
        expect(monthTitle).toHaveTextContent("April 2024");
        expect(days).toHaveLength(30);
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
    expect(months).toHaveLength(2);

    for (let i = 0; i < 2; i++) {
      const month = months[i];
      const monthTitle = month.querySelector(".month-title");
      expect(monthTitle).toBeInTheDocument();
      const days = month.querySelectorAll(
        '.day:not([data-test-outofmonth="true"])'
      );
      if (i === 0) {
        expect(monthTitle).toHaveTextContent("March 2024");
        expect(days).toHaveLength(31);
      } else {
        expect(monthTitle).toHaveTextContent("April 2024");
        expect(days).toHaveLength(30);
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
    expect(months).toHaveLength(2);

    for (let i = 0; i < 2; i++) {
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
      } else {
        expect(monthTitle).toHaveTextContent("April 2024");
        expect(days).toHaveLength(30);
        for (let j = 0; j < 30; j++) {
          const day = days[j];
          expect(day).not.toHaveAttribute("disabled");
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
    expect(months).toHaveLength(2);

    for (let i = 0; i < 2; i++) {
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
      } else {
        expect(monthTitle).toHaveTextContent("April 2024");
        expect(days).toHaveLength(30);
        for (let j = 0; j < 30; j++) {
          const day = days[j];
          expect(day).toHaveAttribute("disabled");
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
    expect(months).toHaveLength(2);

    const month = months[0];
    const monthTitle = month.querySelector(".month-title");
    expect(monthTitle).toBeInTheDocument();
    const today = month.querySelector(`[data-test-today="true"]`);
    expect(today).toHaveAttribute("disabled");
  });
});
