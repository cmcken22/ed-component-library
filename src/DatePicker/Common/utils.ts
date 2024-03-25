import isEqual from "lodash.isequal";

export const checkDateInArray = (date: Date, dates: Date[]) => {
  return dates.some((d) => d?.getTime() === date?.getTime());
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

export const convertDateToGMT = (value: any) => {
  if (value && isValidDate(value)) {
    const date = new Date(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  return null;
};

export const numberOfMonthsBetween = (d2: Date, d1: Date, abs = false) => {
  if (!isValidDate(d1) || !isValidDate(d2)) return NaN;
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  if (abs) return Math.abs(months);
  return months;
};

export const formatDateRange = (values: Date[]) => {
  if (!values) return null;
  if (!Array.isArray(values)) return null;
  if (Array.isArray(values) && values.length === 0) return null;
  return values?.map((date) => convertDateToGMT(date));
};

export const findDiffIndex = (prev: Date[], next: Date[]) => {
  const len = Math.max(prev?.length, next?.length);
  if (isNaN(len)) return -1;
  for (let i = 0; i < len; i++) {
    if (!isEqual(prev?.[i], next?.[i])) return i;
  }
  return -1;
};

export const getThisWeek = (date: Date) => {
  const currentDate = convertDateToGMT(date);

  // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const currentDayOfWeek = currentDate.getDay();

  // Calculate the difference between the current day of the week and Sunday (0)
  const differenceToSunday = currentDayOfWeek;

  // Calculate the difference to Saturday (6)
  const differenceToSaturday = 6 - currentDayOfWeek;

  // Clone the current date to avoid mutating it
  const firstDayOfWeek = new Date(currentDate);
  firstDayOfWeek.setDate(currentDate.getDate() - differenceToSunday);

  // Clone the current date to avoid mutating it
  const lastDayOfWeek = new Date(currentDate);
  lastDayOfWeek.setDate(currentDate.getDate() + differenceToSaturday);
  return [firstDayOfWeek, lastDayOfWeek];
};

export const getThisMonth = (date: Date) => {
  const currentDate = convertDateToGMT(date);

  // Get the year and month of the input date
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Create a new date object for the first day of the month
  const firstDayOfMonth = new Date(year, month, 1);

  // Get the last day of the month by setting the date to 0 (which is the last day of the previous month)
  const lastDayOfMonth = new Date(year, month + 1, 0);

  return [firstDayOfMonth, lastDayOfMonth];
};

export const getThisYear = (date: Date) => {
  const currentDate = convertDateToGMT(date);

  // Get the year of the input date
  const year = currentDate.getFullYear();

  // Create a new date object for the first day of the year
  const firstDayOfYear = new Date(year, 0, 1);

  // Get the last day of the year by setting the month to 11 (December) and the date to 31
  const lastDayOfYear = new Date(year, 11, 31);

  return [firstDayOfYear, lastDayOfYear];
};
