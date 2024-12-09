function addWeeks(date, weeks) {
  const newDate = new Date(date);

  newDate.setDate(newDate.getDate() + weeks * 7);

  return newDate;
}

console.log(addWeeks("2024-01-01", 1));
console.log(addWeeks("2024-12-08", 2));
