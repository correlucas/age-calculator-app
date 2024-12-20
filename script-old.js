"use strict";

const myYears = document.getElementById('myYears');
const myMonths = document.getElementById('myMonths');
const myDays = document.getElementById('myDays');
const button = document.getElementById('button');
const errorMessage = document.querySelector('error-message');
const labelDay = document.getElementById('labelDay');
const labelMonth = document.getElementById('labelMonth');
const labelYear = document.getElementById('labelYear');

const dayError = document.getElementById('day-error');
const monthError = document.getElementById('month-error');
const yearError = document.getElementById('year-error');


function calcAge() {
  const dayInput = document.getElementById('day');
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  // to get the birth date
  const dateOfBirth = new Date(year, month - 1, day);

  // to get the current date
  const today = new Date();

  let hasError = false;

  if (dayInput.value.trim() === '') {
    dayError.style.display = 'block';
    dayError.textContent = 'This field is required';
    labelDay.style.color = 'hsl(0, 100%, 67%)';
    hasError = true;
  } else if (day < 1 || day > 31) {
    dayError.style.display = 'block';
    dayError.textContent = 'Must be a valid day';
    labelDay.style.color = 'hsl(0, 100%, 67%)';
    hasError = true;
  } else {
    dayError.style.display = 'none';
    labelDay.style.color = 'unset';
  }

  if (monthInput.value.trim() === '') {
    monthError.style.display = 'block';
    monthError.textContent = 'This field is required';
    labelMonth.style.color = 'hsl(0, 100%, 67%)';
    hasError = true;
  } else if (month < 1 || month > 12) {
    monthError.style.display = 'block';
    monthError.textContent = 'Must be a valid month';
    labelMonth.style.color = 'hsl(0, 100%, 67%)';
    hasError = true;
  } else {
    monthError.style.display = 'none';
    labelMonth.style.color = 'unset';
  }

  if (yearInput.value.trim() === '') {
    yearError.style.display = 'block';
    yearError.textContent = 'This field is required';
    labelYear.style.color = 'hsl(0, 100%, 67%)';
    hasError = true;
  }   // verify if the user insert a future date
  else if (year > today.getFullYear()) {
    yearError.style.display = 'block';
    // labelYear.style.color = 'hsl(0, 100%, 67%)';
    yearError.textContent = 'Must be a year in the past'
    return
  } else {
    yearError.style.display = 'none';
    labelYear.style.color = 'unset';
  }

  if (hasError) {
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
