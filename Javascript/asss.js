function diaDaSemanaPorExtenso(data) {
  const diaDaSemana = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];
  let date = new Date(data);
  const day = date.getDay();

  return diaDaSemana[day];
}

console.log(diaDaSemanaPorExtenso("2024-12-08"));
