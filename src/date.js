const dateObject = new Date();

const weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
];

const dayNumber = dateObject.getDay();
const day = weekDays[dayNumber];

const date = dateObject.getDate();
const monthNumber = dateObject.getMonth();
const month = months[monthNumber];
const hour = dateObject.getHours();
const minute = dateObject.getMinutes();

function timeZeroPadding(time) {
  if (time < 10) return `0${time}`;
  return time;
}

export const fullDate = `${day} ${date}. ${month} ${timeZeroPadding(
  hour
)}:${timeZeroPadding(minute)}`;

export const getNextDays = number => {
  let day = new Date();
  let nextDay = new Date(day);
  nextDay.setDate(day.getDate() + number);
  return `${nextDay.getDate()}. ${months[nextDay.getMonth()]}`;
};
