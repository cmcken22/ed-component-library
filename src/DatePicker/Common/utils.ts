export const checkDateInArray = (date: Date, dates: Date[]) => {
  return dates.some((d) => d.getTime() === date.getTime());
};

export const nullFilter = (date: Date | null) =>
  date !== null && isValidDate(date);

export const sorteDates = (d1: Date, d2: Date) => d1.getTime() - d2.getTime();

export const detectUpdatedIndex = (prev: Date[], next: Date[]) => {
  if (prev.length !== next.length) return -1;
  for (let i = 0; i < prev.length; i++) {
    if (!isValidDate(prev[i]) && !isValidDate(next[i])) continue;
    if (!isValidDate(prev[i]) && isValidDate(next[i])) return i;
    if (isValidDate(prev[i]) && !isValidDate(next[i])) return i;
    if (!prev[i] && next[i]) return i;
    if (prev[i] && !next[i]) return i;
    if (prev[i] && next[i]) {
      if (prev[i].getTime() !== next[i].getTime()) return i;
    }
  }
  return -1;
};

export const subtractMonths = (date: Date, numberOfMonths = 1) => {
  // very important to create a new date object
  // we dont want to mutate the original date
  const nextDate = new Date(date);
  const currentMonth = nextDate.getMonth();
  nextDate.setDate(1);
  nextDate.setMonth(currentMonth - numberOfMonths);
  return nextDate;
};

export const isValidDate = (date: Date) => {
  try {
    if (date instanceof Date && !isNaN(date.getTime())) return true;
    return false;
  } catch (e) {
    return false;
  }
};

export const getMonth = (date: Date) => {
  if (!isValidDate(date)) return -1;
  return date.getMonth();
};

export const getYear = (date: Date) => {
  if (!isValidDate(date)) return -1;
  return date.getFullYear();
};

export const numberToMonth = (num: number) => {
  const monthMap = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  return monthMap?.[num];
};

export const getMonthFromCalendar = (weeks: any) => {
  const firstDayOfMonth = getFirstDay(weeks);
  const month = new Date(firstDayOfMonth).getMonth();
  return month;
};

export const getFirstDay = (weeks: any) => {
  for (let i = 0; i < weeks.length; i++) {
    const week = weeks[i];
    for (let j = 0; j < week.length; j++) {
      const day = week[j];
      if (new Date(day).getDate() === 1) {
        return day;
      }
    }
  }
};
