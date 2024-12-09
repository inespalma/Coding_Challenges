function getFullMonthName(date) {
  const dateObj = new Date(date);
  const month = dateObj.getMonth();

  let months = [
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
  return months[month];
}

console.log(getFullMonthName("2024-01-01"));
// Output: "January"
console.log(getFullMonthName("2024-12-08"));
// Output: "December"
