function mesPorExtenso(data) {
  const date = new Date(data);
  const month = date.getMonth();

  let list = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return list[month];
}

console.log(mesPorExtenso("2024-12-08"));
console.log(mesPorExtenso("2024-01-01"));
