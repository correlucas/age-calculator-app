"use strict";

const myYears = document.getElementById('myYears');
const myMonths = document.getElementById('myMonths');
const myDays = document.getElementById('myDays');
const button = document.getElementById('button');

function calcAge() {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert('Insert a correct date');
    return;
  }

  // to get the birth date
  const dateOfBirth = new Date(year, month - 1, day);

  // Check if is a valid date
  if (dateOfBirth.getDate() !== day || dateOfBirth.getMonth() !== month - 1 || dateOfBirth.getFullYear() !== year) {
    alert('Insert a valid date');
    return;
  }

  // to get the current date
  const today = new Date();


  // check if date is a future day
  if (dateOfBirth > today) {
    alert('Insert a correct date');
    return;
  }

  // calculate the difference between the date
  let years = today.getFullYear() - dateOfBirth.getFullYear();
  let months = today.getMonth() - dateOfBirth.getMonth();
  let days = today.getDate() - dateOfBirth.getDate();

  //adjust if the days difference is negative
  if (days < 0) {
    months -= 1;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  //adjust if the months difference is negative
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  //update output
  myYears.innerText = years;
  myMonths.innerText = months;
  myDays.innerText = days;
}

button.addEventListener('click', calcAge);