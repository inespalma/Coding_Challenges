function getFullDayName(date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dateObj = new Date(date);
  const day = dateObj.getDay();

  return daysOfWeek[day];
}

console.log(dayOfWeekInFull("2024-12-08"));
