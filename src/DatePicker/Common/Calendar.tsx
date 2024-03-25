import CalendarWrapper from "./CalendarWrapper";
import Day from "./Day";
import { Month } from "./Month";
import { getMonthFromCalendar } from "./utils";

const Calendar = ({ months, onSelect }: any) => {
  return (
    <CalendarWrapper>
      {months?.map((weeks, index) => {
        const monthNumber = getMonthFromCalendar(weeks);
        return (
          <Month
            key={`month--${monthNumber}`}
            weeks={weeks}
            monthNumber={monthNumber}
          >
            <Month.Header
              displayPrevMonthBtn={index === 0}
              displayNextMonthBtn={index === months.length - 1}
            />
            <Month.WeeklyHeader />
            {weeks?.map((week: Date[], weekIdx: number) => {
              return (
                <Month.Week key={`${monthNumber}--${weekIdx}`}>
                  {week?.map((day: Date) => (
                    <Day
                      key={`${monthNumber}--${day.toISOString()}`}
                      day={day}
                      onSelect={onSelect}
                    />
                  ))}
                </Month.Week>
              );
            })}
          </Month>
        );
      })}
    </CalendarWrapper>
  );
};

export default Calendar;
