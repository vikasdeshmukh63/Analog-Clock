// ELEMENT SELECTION
const hoursEle = document.querySelector(".hours");
const minutesEle = document.querySelector(".minutes");
const secondsEle = document.querySelector(".seconds");
const dayEle = document.querySelector(".day");
const monthEle = document.querySelector(".month");
const yearEle = document.querySelector(".year");
const weekEle = document.querySelector(".week");
// -----------------------------------------------------------
// ARRAYS
const weekArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// ---------------------------------------------------------------
// MAIN FUNCTION
function updateClock() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const week = currentDate.getDay();
  const hourdeg = (hours / 12) * 360;
  hoursEle.style.transform = `rotate(${hourdeg}deg)`;
  const minutedeg = (minutes / 60) * 360;
  minutesEle.style.transform = `rotate(${minutedeg}deg)`;
  const seconddeg = (seconds / 60) * 360;
  secondsEle.style.transform = `rotate(${seconddeg}deg)`;
  dayEle.textContent = date;
  monthEle.textContent = monthArray[month];
  yearEle.textContent = year;
  weekEle.textContent = weekArray[week];
}
// -------------------------------------------------------------------
setInterval(updateClock, 1000);
