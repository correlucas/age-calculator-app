"use strict";

const myYears = document.getElementById('myYears');
const myMonths = document.getElementById('myMonths');
const myDays = document.getElementById('myDays');
const button = document.getElementById('button');

function calcAge() {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);

  // if (isNaN(day) || isNaN(month) || isNaN(year)) {
  //   alert('Insert a correct date');
  // }
  // to get the birth date
  const dateOfBirth = new Date(year, month - 1, day);
  // to get the current year
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // calculate the difference between years
  let years = currentDate.getFullYear() - dateOfBirth.getFullYear();
  let months = currentDate.getMonth() - dateOfBirth.getMonth();
  let days = currentDate.getDate() - dateOfBirth.getDate();

  if (days > 31) {
    days = 0;
    months += 1;
  }



  if (months < 0) {
    years -= 1;
    months += 12;
  }

  myYears.innerText = years;
  myMonths.innerText = months;
  myDays.innerText = days;

  return;
}

button.addEventListener('click', calcAge)