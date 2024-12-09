function getDateInWords(data) {
  const date = new Date(data);
  const dayOfWeek = date.getDay();
  const month = date.getMonth();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
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

  return `${daysOfWeek[dayOfWeek]}, ${date.getDate()} of ${
    months[month]
  } of ${date.getFullYear()}`;
}

console.log(getDateInWords("2024-12-08"));
// Output: Sunday, 8 of December of 2024
