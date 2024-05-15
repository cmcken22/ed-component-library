import "@testing-library/jest-dom";
import { TEST_ID } from "src/enums";
import { fireEvent, render } from "test-utils/index";
import DatePickerCalendar, { DatePickerCalendarProps } from ".";

const tools = [
  "Today",
  "Yesterday",
  "This Week",
  "This Month",
  "Last Month",
  "This Year",
  "Last Year",
];

const shouldRenderProperMonth = (calendar, expectedMonth, expectedDays) => {
  expect(calendar).toBeInTheDocument();
  const months = calendar.querySelectorAll(`.month`);
  expect(months).toHaveLength(1);

  const month = months[0];
  const monthTitle = month.querySelector(".month-title");
  expect(monthTitle).toBeInTheDocument();
  const days = month.querySelectorAll(
    '.day:not([data-test-outofmonth="true"])'
  );
  expect(monthTitle).toHaveTextContent(expectedMonth);
  expect(days).toHaveLength(expectedDays);
};

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
    const calendar = getByTestId(TEST_ID.CALENDAR);
    shouldRenderProperMonth(calendar, "March 2024", 31);

    const today = calendar.querySelector(`[data-test-today="true"]`);
    expect(today).toBeInTheDocument();
    expect(today).toHaveAttribute("data-test-date", "15");
  });

  it("should have date selected", () => {
    props.value = new Date("2024-03-15T04:00:00.000Z");
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(TEST_ID.CALENDAR);
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
    const calendar = getByTestId(TEST_ID.CALENDAR);
    shouldRenderProperMonth(calendar, "April 2024", 30);
  });

  it("should update value", () => {
    props.value = new Date("2024-03-15T04:00:00.000Z");
    // new Date("2024-03-17T04:00:00.000Z")
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(TEST_ID.CALENDAR);
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

  it("should unselect date", () => {
    props.value = new Date("2024-03-15T04:00:00.000Z");
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(TEST_ID.CALENDAR);
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
    const calendar = getByTestId(TEST_ID.CALENDAR);
    shouldRenderProperMonth(calendar, "March 2024", 31);

    const today = calendar.querySelector(`[data-test-today="true"]`);
    expect(today).toBeInTheDocument();
    expect(today).toHaveAttribute("data-test-date", "15");
  });

  it("should render correctly if no values passed", () => {
    props.value = undefined;
    // check if it ignores the bad data and displays current date
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(TEST_ID.CALENDAR);
    shouldRenderProperMonth(calendar, "March 2024", 31);

    const today = calendar.querySelector(`[data-test-today="true"]`);
    expect(today).toBeInTheDocument();
    expect(today).toHaveAttribute("data-test-date", "15");
  });

  it("should disable past dates", () => {
    props.disablePast = true;
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(TEST_ID.CALENDAR);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(1);

    const month = months[0];
    const monthTitle = month.querySelector(".month-title");
    expect(monthTitle).toBeInTheDocument();
    const days = month.querySelectorAll(
      '.day:not([data-test-outofmonth="true"])'
    );

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
  });

  it("should disable future dates", () => {
    props.disableFuture = true;
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(TEST_ID.CALENDAR);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(1);

    const month = months[0];
    const monthTitle = month.querySelector(".month-title");
    expect(monthTitle).toBeInTheDocument();
    const days = month.querySelectorAll(
      '.day:not([data-test-outofmonth="true"])'
    );

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
  });

  it("should disable current date", () => {
    props.disableCurrent = true;
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(TEST_ID.CALENDAR);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(1);

    const month = months[0];
    const monthTitle = month.querySelector(".month-title");
    expect(monthTitle).toBeInTheDocument();
    const today = month.querySelector(`[data-test-today="true"]`);
    expect(today).toHaveAttribute("disabled");
  });

  describe("should have tool bar", () => {
    it("should render correctly", () => {
      props.tools = true;
      const { getByTestId } = renderComponent(props);
      const toolbar = getByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();

      for (let i = 0; i < tools.length; i++) {
        const tool = getByTestId(`toolbar-item--${tools[i]}`);
        expect(tool).toHaveTextContent(tools[i]);
      }
    });

    it("should update view to today", () => {
      props.tools = true;
      props.value = new Date("2024-09-27T04:00:00.000Z");
      const { getByTestId } = renderComponent(props);
      const calendar = getByTestId(TEST_ID.CALENDAR);
      shouldRenderProperMonth(calendar, "September 2024", 30);

      const toolbar = getByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();

      const todayTool = getByTestId(`toolbar-item--Today`);
      expect(todayTool).toHaveTextContent("Today");

      fireEvent.click(todayTool);
      expect(props.onSelect).toHaveBeenCalledWith(
        new Date("2024-03-15T04:00:00.000Z")
      );
      shouldRenderProperMonth(calendar, "March 2024", 31);
    });

    it("should update view to yesterday", () => {
      props.tools = true;
      props.value = new Date("2024-09-27T04:00:00.000Z");
      const { getByTestId } = renderComponent(props);
      const calendar = getByTestId(TEST_ID.CALENDAR);
      shouldRenderProperMonth(calendar, "September 2024", 30);

      const toolbar = getByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();

      const yesterdayTool = getByTestId(`toolbar-item--Yesterday`);
      expect(yesterdayTool).toHaveTextContent("Yesterday");

      fireEvent.click(yesterdayTool);
      expect(props.onSelect).toHaveBeenCalledWith(
        new Date("2024-03-14T04:00:00.000Z")
      );
      shouldRenderProperMonth(calendar, "March 2024", 31);
    });

    it("should update view to this Month", () => {
      props.tools = true;
      props.value = new Date("2025-09-27T04:00:00.000Z");
      const { getByTestId } = renderComponent(props);
      const calendar = getByTestId(TEST_ID.CALENDAR);
      shouldRenderProperMonth(calendar, "September 2025", 30);

      const toolbar = getByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();

      const thisMonthTool = getByTestId(`toolbar-item--This Month`);
      expect(thisMonthTool).toHaveTextContent("This Month");

      fireEvent.click(thisMonthTool);
      shouldRenderProperMonth(calendar, "March 2024", 31);
    });

    it("should update view to last Month", () => {
      props.tools = true;
      props.value = new Date("2025-09-27T04:00:00.000Z");
      const { getByTestId } = renderComponent(props);
      const calendar = getByTestId(TEST_ID.CALENDAR);
      shouldRenderProperMonth(calendar, "September 2025", 30);

      const toolbar = getByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();

      const lastMonthTool = getByTestId(`toolbar-item--Last Month`);
      expect(lastMonthTool).toHaveTextContent("Last Month");

      fireEvent.click(lastMonthTool);
      shouldRenderProperMonth(calendar, "February 2024", 29);
    });

    it("should update view to this year", () => {
      props.tools = true;
      props.value = new Date("2025-09-27T04:00:00.000Z");
      const { getByTestId } = renderComponent(props);
      const calendar = getByTestId(TEST_ID.CALENDAR);
      shouldRenderProperMonth(calendar, "September 2025", 30);

      const toolbar = getByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();

      const thisYearTool = getByTestId(`toolbar-item--This Year`);
      expect(thisYearTool).toHaveTextContent("This Year");

      fireEvent.click(thisYearTool);
      shouldRenderProperMonth(calendar, "March 2024", 31);
    });

    it("should update view to last year", () => {
      props.tools = true;
      props.value = new Date("2025-09-27T04:00:00.000Z");
      const { getByTestId } = renderComponent(props);
      const calendar = getByTestId(TEST_ID.CALENDAR);
      shouldRenderProperMonth(calendar, "September 2025", 30);

      const toolbar = getByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();

      const lstYearTool = getByTestId(`toolbar-item--Last Year`);
      expect(lstYearTool).toHaveTextContent("Last Year");

      fireEvent.click(lstYearTool);
      shouldRenderProperMonth(calendar, "March 2023", 31);
    });
  });
});
