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

function formatDateToDDMMYYYY1(data) {
  const date = new Date(data);

  if (isNaN(date)) {
    return "Invalid Date.";
  }

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

console.log(formatDateToDDMMYYYY1("2024-12-08"));
// Output: 08-12-2024
console.log(formatDateToDDMMYYYY1("2024-01-01"));
// Output: 01-01-2024
console.log(formatDateToDDMMYYYY1("Invalid"));
console.log(
  formatDateToDDMMYYYY1(
    "Fri Apr 10 1992 03:37:39 GMT+0200 (Central European Summer Time)"
  )
);
