function dataPorExtenso(data) {
  const date = new Date(data);
  const dia = date.getDay();
  const month = date.getMonth();

  const diaDaSemana = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];

  const mes = [
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

  return `${diaDaSemana[dia]}, ${date.getDate()} de ${
    mes[month]
  } de ${date.getFullYear()}`;
}

console.log(dataPorExtenso("2024-12-08"));
// Output: domingo, 8 de dezembro de 2024
