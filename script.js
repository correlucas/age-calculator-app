"use strict";

const myYears = document.getElementById('myYears');
const myMonths = document.getElementById('myMonths');
const myDays = document.getElementById('myDays');


console.log(day);

function calcAge() {
  const day = document.getElementById('day').value = 23;
  const month = document.getElementById('month').value = 8;
  const year = document.getElementById('year').value = 1991;

  // if (isNaN(day) || isNaN(month) || isNaN(year)) {
  //   alert('Insert a correct date');
  // }
  // to get the birth date
  const dateOfBirth = new Date(year, month - 1, day);
  // to get the current year
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // calculate the difference between years
  let ageYear = currentDate.getFullYear() - dateOfBirth.getFullYear();
  console.log(ageYear)
  return
}

calcAge(1991);