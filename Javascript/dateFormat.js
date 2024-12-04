function formataData(data) {
  if (!(data instanceof Date) || isNaN(data.getTime())) {
    return "Invalid Date";
  }

  const day = String(data.getDate()).padStart(2, "0");
  const month = String(data.getMonth() + 1).padStart(2, "0");
  const year = data.getFullYear();

  return `${day}-${month}-${year}`;
}

console.log(formataData(new Date("2024-12-04"))); // "04-12-2024"
console.log(formataData(new Date())); // Current date in dd-mm-yyyy format
