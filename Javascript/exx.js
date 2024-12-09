function adicionarSemanas(data, semanas) {
  const novaData = new Date(data);

  novaData.setDate(novaData.getDate() + semanas * 7);

  return novaData;
}

console.log(adicionarSemanas("2024-01-01", 1));
console.log(adicionarSemanas("2024-12-08", 2));
