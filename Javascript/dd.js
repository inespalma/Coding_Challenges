function diferencaEmDias(data1, data2) {
  let primeiraData = new Date(data1);
  let segundaData = new Date(data2);

  let difEmMilisegundos = segundaData - primeiraData;

  let difEmDias = difEmMilisegundos / (1000 * 3600 * 24);

  return Math.floor(Math.abs(difEmDias));
}

console.log(diferencaEmDias("2022-03-04T00:00:00", "2022-02-28T00:00:00"));
