function tempoEmPalavras(h, m) {
  // Mapas de números por extenso para horas e minutos
  const horasPorExtenso = [
    "meia noite",
    "uma",
    "duas",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
    "onze",
    "meio-dia",
    "uma",
    "duas",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
    "onze",
  ];

  const minutosPorExtenso = [
    "zero",
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
    "onze",
    "doze",
    "treze",
    "quatorze",
    "quinze",
    "dezesseis",
    "dezessete",
    "dezoito",
    "dezenove",
    "vinte",
    "vinte e um",
    "vinte e dois",
    "vinte e três",
    "vinte e quatro",
    "vinte e cinco",
    "vinte e seis",
    "vinte e sete",
    "vinte e oito",
    "vinte e nove",
    "meia",
  ];

  // Tratar os casos especiais de meia noite e meio-dia
  if (h === 0 && m === 0) {
    return "meia noite em ponto";
  }
  if (h === 12 && m === 0) {
    return "meio dia em ponto";
  }

  // Se o minuto for zero, só dizemos a hora
  if (m === 0) {
    return `${horasPorExtenso[h]} em ponto`;
  }

  // Se os minutos são menores ou iguais a 30, usamos "past"
  if (m <= 30) {
    if (m === 15) {
      return `um quarto após as ${horasPorExtenso[h]}`;
    }
    if (m === 30) {
      return `meia após as ${horasPorExtenso[h]}`;
    }
    return `${minutosPorExtenso[m]} minutos após as ${horasPorExtenso[h]}`;
  }

  // Para os minutos maiores que 30, usamos "para"
  const novaHora = (h + 1) % 24; // A hora vai para o próximo número (ciclo 24 horas)
  const minutosPara = 60 - m;

  if (minutosPara === 15) {
    return `um quarto para as ${horasPorExtenso[novaHora]}`;
  }

  return `${minutosPorExtenso[minutosPara]} minutos para as ${horasPorExtenso[novaHora]}`;
}

console.log(tempoEmPalavras(10, 30)); // "meia após as dez"
console.log(tempoEmPalavras(5, 15)); // "um quarto após as cinco"
console.log(tempoEmPalavras(12, 0)); // "meio dia em ponto"
console.log(tempoEmPalavras(0, 0)); // "meia noite em ponto"
console.log(tempoEmPalavras(3, 45)); // "um quarto para as quatro"
console.log(tempoEmPalavras(2, 10)); // "dez minutos após as duas"
