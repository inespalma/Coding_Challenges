function subtrairDias(data, dias) {
  const novaData = new Date(data);

  let result = novaData.setDate(novaData.getDate() - dias);
  console.log(result);
  return novaData;
}

console.log(subtrairDias("2024-12-08", 10));
//2024-11-28T00:00:00.000Z
console.log(subtrairDias("2024-01-01", 30));
//2023-12-02T00:00:00.000Z
console.log(subtrairDias("1994-11-10", 6));
//2023-12-02T00:00:00.000Z

// Thu Nov 10 1994 04:59:14 GMT+0100 (Hora padrão da Europa Central)
// 6
