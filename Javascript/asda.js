function arrayDeZeroAN(n) {

    if (n <= 0 || typeof n !== "number") {
        return "Por favor insira um número superior a 0."
    }

    if (n === 1) {
        return [0, 1];
    }

    return [...arrayDeZeroAN(n - 1), n];

}

//RECURSAO

const resultado = arrayDeZeroAN(5);
console.log(resultado); // Output: [0, 1, 2, 3, 4]

const resultadoInvalido = arrayDeZeroAN(-2);
console.log(resultadoInvalido); // Output: "Por favor insira um número superior a 0."

const resultadoInvalido2 = arrayDeZeroAN("abc");
console.log(resultadoInvalido2); // Output: "Por favor insira um número superior a 0."

const resultadoInvalido3 = arrayDeZeroAN(
  73,
  72,
  71,
  70,
  69,
  68,
  67,
  66,
  65,
  64,
  63,
  62,
  61,
  60,
  59,
  58,
  57,
  56,
  55,
  54,
  53,
  52,
  51,
  50,
  49,
  48,
  47,
  46,
  45,
  44,
  43,
  42,
  41,
  40,
  39,
  38,
  37,
  36,
  35,
  34,
  33,
  32,
  31,
  30,
  29,
  28,
  27,
  26,
  25,
  24,
  23,
  22,
  21,
  20,
  19,
  18,
  17,
  16,
  15,
  14,
  13,
  12,
  11,
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  0
);
console.log(resultadoInvalido3); // Output: "Por favor insira um número superior a 0."
