function horaPorExtenso(data) {
  const horasExtenso = [
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
    "doze",
    "treze",
    "catorze",
    "quinze",
    "dezasseis",
    "dezassete",
    "dezoito",
    "dezanove",
    "vinte",
    "vinte e uma",
    "vinte e duas",
    "vinte e três",
  ];

  const minutosExtenso = [
    "em ponto",
    "um",
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
    "doze",
    "treze",
    "catorze",
    "um quarto",
    "dezasseis",
    "dezessete",
    "dezoito",
    "dezanove",
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
    "trinta e um",
    "trinta e dois",
    "trinta e três",
    "trinta e quatro",
    "trinta e cinco",
    "trinta e seis",
    "trinta e sete",
    "trinta e oito",
    "trinta e nove",
    "quarenta",
    "quarenta e um",
    "quarenta e dois",
    "quarenta e três",
    "quarenta e quatro",
    "três quartos",
    "quarenta e seis",
    "quarenta e sete",
    "quarenta e oito",
    "quarenta e nove",
    "cinquenta",
    "cinquenta e um",
    "cinquenta e dois",
    "cinquenta e três",
    "cinquenta e quatro",
    "cinquenta e cinco",
    "cinquenta e seis",
    "cinquenta e sete",
    "cinquenta e oito",
    "cinquenta e nove",
  ];

  const date = new Date(data);
  const horas = date.getUTCHours();
  const minutos = date.getUTCMinutes();

  return `${horasExtenso[horas]} e ${minutosExtenso[minutos]}`;
}

console.log(horaPorExtenso("2021-05-17 09:00"));
// "nove em ponto"
console.log(horaPorExtenso("2021-05-17 09:15"));
// "nove e um quarto"
console.log(horaPorExtenso("2021-05-17 09:30"));
// "nove e meia"
console.log(horaPorExtenso("2021-05-17 09:45"));
// "nove e três quartos"
console.log(horaPorExtenso("2021-05-17 09:05"));
// "nove e cinco minutos"
