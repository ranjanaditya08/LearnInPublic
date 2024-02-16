const time = document.querySelector(".time");
const updateDate = document.querySelector(".date");

setInterval(function () {
  let date = new Date();
  time.innerHTML = `${date.toLocaleTimeString()}`;
}, 1000);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
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

let date = new Date();
let newDtae = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
updateDate.innerHTML = `${newDtae}`;
