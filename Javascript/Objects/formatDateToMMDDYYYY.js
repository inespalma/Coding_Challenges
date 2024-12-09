function formatDateToMMDDYYYY(date) {
  const day = date.getDate(); // Gets the day of the month (1-31)
  const month = date.getMonth() + 1; // Gets the month (0-11), so we add 1
  const year = date.getFullYear();

  return `${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}-${year}`;
}

const date = new Date("2024-09-31");
console.log(formatDateToMMDDYYYY(date));
const date1 = new Date("2024-09-10");
console.log(formatDateToMMDDYYYY(date1));
// Output: 09-10-2024
