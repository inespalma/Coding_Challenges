function monthInWordsBilingual(data, language) {
  let monthsPT = [
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

  let monthsEN = [
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

  if (language === "pt") {
    return monthsPT[monthIndex];
  } else if (language === "en") {
    return monthsEN[monthIndex];
  } else {
    return "Unsupported language";
  }
}

console.log(monthInWordsBilingual("2024-12-08", "pt"));
// Dezembro
console.log(monthInWordsBilingual("2024-12-08", "en"));
// December
