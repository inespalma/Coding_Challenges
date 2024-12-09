function subtractDaysInMilliseconds(date, days) {
  const newDate = new Date(date);
  const daysInMillis = days * 24 * 60 * 60 * 1000;

  newDate.setTime(newDate.getTime() - daysInMillis);

  return newDate;
}

console.log(subtractDaysInMilliseconds("2024-12-08", 10));
// Output: 2024-11-28T00:00:00.000Z
console.log(subtractDaysInMilliseconds("2024-12-15", 5));
// Output: 2024-12-10T00:00:00.000Z

// <-----------------Using setDate----------------->

function subtractDaysUsingSetDate(date, days) {
  const newDate = new Date(date);

  newDate.setDate(newDate.getDate() - days);
  return newDate;
}

console.log(subtractDaysUsingSetDate("2024-12-08", 10));
// Output: 2024-11-28T00:00:00.000Z
console.log(subtractDaysUsingSetDate("2024-01-01", 30));
// Output: 2023-12-02T00:00:00.000Z
console.log(subtractDaysUsingSetDate("1994-11-10", 6));
// Output: 2023-11-04T00:00:00.000Z
