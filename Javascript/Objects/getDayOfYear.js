function getDayOfYear(date) {
  let parsedDate = new Date(date);

  // January 1st of the current year
  let startOfYear = new Date(parsedDate.getFullYear(), 0, 0);

  // Difference in milliseconds
  let diff = parsedDate - startOfYear;
  // Number of milliseconds in a day
  let oneDay = 1000 * 60 * 60 * 24;

  // Convert the difference into days
  let dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear;
}

console.log(getDayOfYear("2024-12-08"));
// Output: 343
