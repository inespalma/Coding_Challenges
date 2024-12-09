function subtraiDias(data, dias) {
  const novaData = new Date(data);

  const diasMili = dias * 24 * 60 * 60 * 1000;

  novaData.setTime(novaData.getTime() - diasMili);

  return novaData;
}

console.log(subtraiDias("2024-12-08", 10));
console.log(subtraiDias("2024-12-15", 5));
