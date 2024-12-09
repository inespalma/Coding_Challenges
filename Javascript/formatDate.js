function formatDate(data) {
  const date = new Date(data);

  if (isNaN(date)) {
    return "Data inválida.";
  }

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  console.log(data);

  return `${day}-${month}-${year}`;
}

console.log(formatDate("2024-12-08"));
console.log(formatDate("2024-01-01"));
console.log(formatDate("invalid date"));
console.log(
  formatDate(
    "Fri Apr 10 1992 03:37:39 GMT+0200 (Hora de verão da Europa Central)"
  )
);
