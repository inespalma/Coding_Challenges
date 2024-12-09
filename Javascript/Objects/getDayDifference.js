function getDayDifference(date1, date2) {

  let firstDate = new Date(date1);
  let secondDate = new Date(date2);

  // Calculate the difference in milliseconds
  let diffInMilliseconds = secondDate - firstDate;

  // Convert the difference from milliseconds to days
  let diffInDays = diffInMilliseconds / (1000 * 3600 * 24);

  // Return the absolute value of the difference, rounded down
  return Math.floor(Math.abs(diffInDays));
}

console.log(getDayDifference("2022-03-04T00:00:00", "2022-02-28T00:00:00"));
