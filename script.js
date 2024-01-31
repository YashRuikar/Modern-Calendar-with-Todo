const calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

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

// function to add days

function initCalendar() {
  // to get prev month days and current months all days and rem last month days
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const ladtDay = lastDay.getDate();
  const day = firstDay.getDate();
  const nextDays = 7 - lastDay.getDate() - 1;

// update date top of calendar
  date.innerHTML = months[month] + " " + year;

// adding days on dom

let days = ""

// prev months days

  for (let x = day; x > 0; x--){
    days = `<div class="day prev-date">${prevDays - x + 1}</div>`
  }

}

initCalendar();
