function separateEvenDigitsWithHyphens(value) {
  if (typeof value !== "number" || isNaN(value)) {
    return "Invalid number.";
  }

  const numStr = value.toString();
  let result = "";

  for (let i = 0; i < numStr.length; i++) {
    result += numStr[i];

    if (
      i < numStr.length - 1 &&
      numStr[i] % 2 === 0 && // Current digit is Even
      numStr[i + 1] % 2 === 0 // Next digit is Even
    ) {
      result += "-";
    }
  }

  return result;
}

console.log(separateEvenDigitsWithHyphens(2468));
// Output: "2-4-6-8"

console.log(separateEvenDigitsWithHyphens(1357));
// Output: "1357"

console.log(separateEvenDigitsWithHyphens(1234567889));
// Output: "12345678-89"
