import "@testing-library/jest-dom";
import { TEST_ID } from "src/enums";
import { fireEvent, render } from "test-utils/index";
import RangePickerCalendar, { RangePickerCalendarProps } from ".";

const tools = [
  "Today",
  "Yesterday",
  "This Week",
  "This Month",
  "Last Month",
  "This Year",
  "Last Year",
];

const shouldRenderProperMonths = (calendar, expectedMonths, expectedDays) => {
  expect(calendar).toBeInTheDocument();
  const months = calendar.querySelectorAll(`.month`);
  expect(months).toHaveLength(expectedMonths.length);

  for (let i = 0; i < expectedMonths.length; i++) {
    const month = months[i];
    const monthTitle = month.querySelector(".month-title");
    expect(monthTitle).toBeInTheDocument();
    const days = month.querySelectorAll(
      '.day:not([data-test-outofmonth="true"])'
    );
    expect(monthTitle).toHaveTextContent(expectedMonths[i]);
    expect(days).toHaveLength(expectedDays[i]);
  }
};

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
    const calendar = getByTestId(TEST_ID.CALENDAR);

    shouldRenderProperMonths(calendar, ["March 2024", "April 2024"], [31, 30]);

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
    const calendar = getByTestId(TEST_ID.CALENDAR);

    shouldRenderProperMonths(calendar, ["March 2024", "April 2024"], [31, 30]);

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
    const calendar = getByTestId(TEST_ID.CALENDAR);
    shouldRenderProperMonths(calendar, ["May 2024", "June 2024"], [31, 30]);
  });

  it("should update value", () => {
    props.value = [
      new Date("2024-03-15T04:00:00.000Z"),
      new Date("2024-03-17T04:00:00.000Z"),
    ];
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(TEST_ID.CALENDAR);
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
    const calendar = getByTestId(TEST_ID.CALENDAR);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(2);

    const march = months[0];
    const march5 = march.querySelector(`[data-test-date="5"]`);
    const march30 = march.querySelector(`[data-test-date="30"]`);

    fireEvent.click(march5);
    expect(props.onSelect).toHaveBeenCalledWith([
      new Date("2024-03-05T05:00:00.000Z"),
      null,
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
    const calendar = getByTestId(TEST_ID.CALENDAR);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(2);

    const march = months[0];
    const march15 = march.querySelector(`[data-test-date="15"]`);
    const march17 = march.querySelector(`[data-test-date="17"]`);

    fireEvent.click(march15);
    expect(props.onSelect).toHaveBeenCalledWith([
      null,
      new Date("2024-03-17T04:00:00.000Z"),
    ]);

    fireEvent.click(march17);
    expect(props.onSelect).toHaveBeenCalledWith([null, null]);
  });

  it("should ignore bad values", () => {
    // @ts-expect-error
    props.value = { test: "123" };
    // check if it ignores the bad data and displays current date
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(TEST_ID.CALENDAR);
    shouldRenderProperMonths(calendar, ["March 2024", "April 2024"], [31, 30]);

    const today = calendar.querySelector(`[data-test-today="true"]`);
    expect(today).toBeInTheDocument();
    expect(today).toHaveAttribute("data-test-date", "15");
  });

  it("should render correctly if no values passed", () => {
    props.value = undefined;
    // check if it ignores the bad data and displays current date
    const { getByTestId } = renderComponent(props);
    const calendar = getByTestId(TEST_ID.CALENDAR);
    expect(calendar).toBeInTheDocument();
    shouldRenderProperMonths(calendar, ["March 2024", "April 2024"], [31, 30]);

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
    const calendar = getByTestId(TEST_ID.CALENDAR);
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
    const calendar = getByTestId(TEST_ID.CALENDAR);
    expect(calendar).toBeInTheDocument();
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(2);

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

    const calendar = getByTestId(TEST_ID.CALENDAR);
    const months = calendar.querySelectorAll(`.month`);
    expect(months).toHaveLength(2);

    const month = months[0];
    const march15 = month.querySelector(`[data-test-date="15"]`);
    expect(march15).toHaveAttribute("data-test-selected", "true");

    const yesterday = getByTestId("toolbar-item--Yesterday");
    expect(yesterday).toHaveTextContent("Yesterday");
    fireEvent.click(yesterday);
    expect(props.onSelect).toHaveBeenCalledWith([
      new Date("2024-03-14T04:00:00.000Z"),
      null,
    ]);
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
      props.value = [
        new Date("2024-09-27T04:00:00.000Z"),
        new Date("2024-09-29T04:00:00.000Z"),
      ];
      const { getByTestId } = renderComponent(props);
      const calendar = getByTestId(TEST_ID.CALENDAR);
      shouldRenderProperMonths(
        calendar,
        ["September 2024", "October 2024"],
        [30, 31]
      );

      const toolbar = getByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();

      const todayTool = getByTestId(`toolbar-item--Today`);
      expect(todayTool).toHaveTextContent("Today");

      fireEvent.click(todayTool);
      expect(props.onSelect).toHaveBeenCalledWith([
        new Date("2024-03-15T04:00:00.000Z"),
        null,
      ]);
      shouldRenderProperMonths(
        calendar,
        ["March 2024", "April 2024"],
        [31, 30]
      );
    });

    it("should update view to yesterday", () => {
      props.tools = true;
      props.value = [
        new Date("2024-09-27T04:00:00.000Z"),
        new Date("2024-09-29T04:00:00.000Z"),
      ];
      const { getByTestId } = renderComponent(props);
      const calendar = getByTestId(TEST_ID.CALENDAR);
      shouldRenderProperMonths(
        calendar,
        ["September 2024", "October 2024"],
        [30, 31]
      );

      const toolbar = getByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();

      const yesterdayTool = getByTestId(`toolbar-item--Yesterday`);
      expect(yesterdayTool).toHaveTextContent("Yesterday");

      fireEvent.click(yesterdayTool);
      expect(props.onSelect).toHaveBeenCalledWith([
        new Date("2024-03-14T04:00:00.000Z"),
        null,
      ]);
      shouldRenderProperMonths(
        calendar,
        ["March 2024", "April 2024"],
        [31, 30]
      );
    });

    it("should update select this week", () => {
      props.tools = true;
      props.value = [
        new Date("2024-09-27T04:00:00.000Z"),
        new Date("2024-09-29T04:00:00.000Z"),
      ];
      const { getByTestId } = renderComponent(props);
      const calendar = getByTestId(TEST_ID.CALENDAR);
      shouldRenderProperMonths(
        calendar,
        ["September 2024", "October 2024"],
        [30, 31]
      );

      const toolbar = getByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();

      const thisWeekTool = getByTestId(`toolbar-item--This Week`);
      expect(thisWeekTool).toHaveTextContent("This Week");

      fireEvent.click(thisWeekTool);
      expect(props.onSelect).toHaveBeenCalledWith([
        new Date("2024-03-10T05:00:00.000Z"),
        new Date("2024-03-16T04:00:00.000Z"),
      ]);
      shouldRenderProperMonths(
        calendar,
        ["March 2024", "April 2024"],
        [31, 30]
      );
    });

    it("should select this Month", () => {
      props.tools = true;
      props.value = [
        new Date("2024-09-27T04:00:00.000Z"),
        new Date("2024-09-29T04:00:00.000Z"),
      ];
      const { getByTestId } = renderComponent(props);
      const calendar = getByTestId(TEST_ID.CALENDAR);
      shouldRenderProperMonths(
        calendar,
        ["September 2024", "October 2024"],
        [30, 31]
      );

      const toolbar = getByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();

      const thisMonthTool = getByTestId(`toolbar-item--This Month`);
      expect(thisMonthTool).toHaveTextContent("This Month");

      fireEvent.click(thisMonthTool);
      expect(props.onSelect).toHaveBeenCalledWith([
        new Date("2024-03-01T05:00:00.000Z"),
        new Date("2024-03-31T04:00:00.000Z"),
      ]);
      shouldRenderProperMonths(
        calendar,
        ["March 2024", "April 2024"],
        [31, 30]
      );
    });

    it("should update view to last Month", () => {
      props.tools = true;
      props.value = [
        new Date("2024-09-27T04:00:00.000Z"),
        new Date("2024-09-29T04:00:00.000Z"),
      ];
      const { getByTestId } = renderComponent(props);
      const calendar = getByTestId(TEST_ID.CALENDAR);
      shouldRenderProperMonths(
        calendar,
        ["September 2024", "October 2024"],
        [30, 31]
      );

      const toolbar = getByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();

      const lastMonthTool = getByTestId(`toolbar-item--Last Month`);
      expect(lastMonthTool).toHaveTextContent("Last Month");

      fireEvent.click(lastMonthTool);
      expect(props.onSelect).toHaveBeenCalledWith([
        new Date("2024-02-01T05:00:00.000Z"),
        new Date("2024-02-29T05:00:00.000Z"),
      ]);
      shouldRenderProperMonths(
        calendar,
        ["February 2024", "March 2024"],
        [29, 31]
      );
    });

    it("should select this year", () => {
      props.tools = true;
      props.value = [
        new Date("2024-09-27T04:00:00.000Z"),
        new Date("2024-09-29T04:00:00.000Z"),
      ];
      const { getByTestId } = renderComponent(props);
      const calendar = getByTestId(TEST_ID.CALENDAR);
      shouldRenderProperMonths(
        calendar,
        ["September 2024", "October 2024"],
        [30, 31]
      );

      const toolbar = getByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();

      const thisYearTool = getByTestId(`toolbar-item--This Year`);
      expect(thisYearTool).toHaveTextContent("This Year");

      fireEvent.click(thisYearTool);
      expect(props.onSelect).toHaveBeenCalledWith([
        new Date("2024-01-01T05:00:00.000Z"),
        new Date("2024-12-31T05:00:00.000Z"),
      ]);
      shouldRenderProperMonths(
        calendar,
        ["January 2024", "February 2024"],
        [31, 29]
      );
    });

    it("should select last year", () => {
      props.tools = true;
      props.value = [
        new Date("2024-09-27T04:00:00.000Z"),
        new Date("2024-09-29T04:00:00.000Z"),
      ];
      const { getByTestId } = renderComponent(props);
      const calendar = getByTestId(TEST_ID.CALENDAR);
      shouldRenderProperMonths(
        calendar,
        ["September 2024", "October 2024"],
        [30, 31]
      );

      const toolbar = getByTestId("toolbar");
      expect(toolbar).toBeInTheDocument();

      const lstYearTool = getByTestId(`toolbar-item--Last Year`);
      expect(lstYearTool).toHaveTextContent("Last Year");

      fireEvent.click(lstYearTool);
      expect(props.onSelect).toHaveBeenCalledWith([
        new Date("2023-01-01T05:00:00.000Z"),
        new Date("2023-12-31T05:00:00.000Z"),
      ]);
      shouldRenderProperMonths(
        calendar,
        ["January 2023", "February 2023"],
        [31, 28]
      );
    });
  });
});
