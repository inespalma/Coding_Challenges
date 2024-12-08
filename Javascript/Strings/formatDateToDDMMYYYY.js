function formatDateToDDMMYYYY(data) {
  if (!(data instanceof Date) || isNaN(data.getTime())) {
    return "Invalid Date";
  }

  const day = String(data.getDate()).padStart(2, "0");
  const month = String(data.getMonth() + 1).padStart(2, "0");
  const year = data.getFullYear();

  return `${day}-${month}-${year}`;
}

console.log(formatDateToDDMMYYYY(new Date("2024-12-04")));
// Output: "04-12-2024"
console.log(formatDateToDDMMYYYY(new Date("2024-1-1")));
// Output: "01-01-2024"
