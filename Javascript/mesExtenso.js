function mesPorExtensoBilingue(data, lingua) {
  let mes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  let month = [
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

  let date = new Date(data);
  let monthIndex = date.getMonth();

  if (lingua === "pt") {
    return mes[monthIndex];
  } else if (lingua === "en") {
    return month[monthIndex];
  } else {
    return "Língua não suportada";
  }
}

console.log(mesPorExtensoBilingue("2024-12-08", "pt")); // Dezembro
console.log(mesPorExtensoBilingue("2024-12-08", "en")); // December
