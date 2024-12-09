function diaDoAno(data) {
  let date = new Date(data);

  // 0 de janeiro do ano
  let startOfYear = new Date(date.getFullYear(), 0, 0);

  // Diferença em milissegundos
  let diff = date - startOfYear;
  // Número de milissegundos em um dia
  let oneDay = 1000 * 60 * 60 * 24;

  // Converte a diferença para dias
  let dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear;
}

console.log(diaDoAno("2024-12-08"));
// Output: 343
