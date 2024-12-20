"use strict";

const myYears = document.getElementById('myYears');
const myMonths = document.getElementById('myMonths');
const myDays = document.getElementById('myDays');
const button = document.getElementById('button');

const labelDay = document.getElementById('labelDay');
const labelMonth = document.getElementById('labelMonth');
const labelYear = document.getElementById('labelYear');

const dayError = document.getElementById('day-error');
const monthError = document.getElementById('month-error');
const yearError = document.getElementById('year-error');

function validateField(input, errorElement, labelElement, min, max, emptyMessage, invalidMessage) {
  const value = parseInt(input.value);
  if (input.value.trim() === '') {
    errorElement.style.display = 'block';
    errorElement.textContent = emptyMessage;
    labelElement.style.color = 'hsl(0, 100%, 67%)';
    input.classList.add('input-error');
    return false;
  } else if (isNaN(value) || value < min || value > max) {
    errorElement.style.display = 'block';
    errorElement.textContent = invalidMessage;
    labelElement.style.color = 'hsl(0, 100%, 67%)';
    input.classList.add('input-error');
    return false;
  } else {
    errorElement.style.display = 'none';
    labelElement.style.color = 'unset';
    input.classList.remove('input-error');
    return true;
  }
}

function clearError(input, errorElement, labelElement) {
  input.addEventListener('input', () => {
    errorElement.style.display = 'none';
    labelElement.style.color = 'unset';
    input.classList.remove('input-error');
  });
}

function calcAge() {
  const dayInput = document.getElementById('day');
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');

  const today = new Date();

  const isDayValid = validateField(dayInput, dayError, labelDay, 1, 31, 'This field is required', 'Must be a valid day');
  const isMonthValid = validateField(monthInput, monthError, labelMonth, 1, 12, 'This field is required', 'Must be a valid month');
  const isYearValid = validateField(yearInput, yearError, labelYear, 1900, today.getFullYear(), 'This field is required', 'Must be a valid year');

  if (!isDayValid || !isMonthValid || !isYearValid) {
    return;
  }

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  const dateOfBirth = new Date(year, month - 1, day);

  if (dateOfBirth > today) {
    yearError.textContent = 'Must be a year in the past';
    yearError.style.display = 'block';
    labelYear.style.color = 'hsl(0, 100%, 67%)';
    yearInput.classList.add('input-error');
    return;
  }

  let years = today.getFullYear() - dateOfBirth.getFullYear();
  let months = today.getMonth() - dateOfBirth.getMonth();
  let days = today.getDate() - dateOfBirth.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  myYears.innerText = years;
  myMonths.innerText = months;
  myDays.innerText = days;
}

button.addEventListener('click', calcAge);

// Clear error messages when typing
clearError(document.getElementById('day'), dayError, labelDay);
clearError(document.getElementById('month'), monthError, labelMonth);
clearError(document.getElementById('year'), yearError, labelYear);