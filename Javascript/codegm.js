function formataNumero(valor) {
  if (typeof valor !== "number" || isNaN(valor)) {
    return "Número não válido.";
  }

  const numStr = valor.toString();
  let result = "";

  for (let i = 0; i < numStr.length; i++) {
    result += numStr[i];

    if (
      numStr.length - 1 &&
      parseInt(numStr[i] % 2) === 0 &&
      parseInt(numStr[i + 1]) % 2 === 0
    ) {
      result += "-";
    }
  }

  return result;
}

console.log(formataNumero(2468));
// Expected Output: "2-4-6-8"
// Explanation: Even digits are separated by hyphens: "2-4-6-8"

console.log(formataNumero(1357));
// Expected Output: "1357"
// Explanation: There are no even digits, so the number is returned unchanged.

console.log(formataNumero(123456789));
// Expected Output: "123456789"
// Explanation: There are no consecutive even digits, so the number is returned unchanged.
