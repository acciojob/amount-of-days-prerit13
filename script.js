//your JS code here. If required.
function daysOfAYear(year) {
  // Leap year rule:
  // - Divisible by 4 ➝ Leap Year
  // - Except if divisible by 100 ➝ Not Leap Year
  // - Unless also divisible by 400 ➝ Leap Year
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366;
  } else {
    return 365;
  }
}
