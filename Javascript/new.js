function formataData(data) {
  const dd = data.getDate();
  const mm = data.getMonth() + 1;
  const aaaa = data.getFullYear();

  // Formata a data como mm-dd-aaaa
  return `${mm.toString().padStart(2, "0")}-${dd
    .toString()
    .padStart(2, "0")}-${aaaa}`;
}

const data = new Date("2024-09-31");
console.log(formataData(data));
// Output: 12-09-2024
