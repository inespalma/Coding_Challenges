function dayOfWeek(day) {
  const daysOfWeek = new Map([
    [1, "Sunday"],
    [2, "Monday"],
    [3, "Tuesday"],
    [4, "Wednesday"],
    [5, "Thursday"],
    [6, "Friday"],
    [7, "Saturday"],
  ]);

  if (day >= 1 && day <= 7) {
    return daysOfWeek.get(day);
  } else {
    return "Invalid number. Please enter a number between 1 and 7.";
  }
}

console.log(dayOfWeek(1)); // Output: "Sunday"
console.log(dayOfWeek(3)); // Output: "Tuesday"
console.log(dayOfWeek(7)); // Output: "Saturday"
