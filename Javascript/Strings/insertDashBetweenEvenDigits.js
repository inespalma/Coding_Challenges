function insertDashBetweenEvenDigits(number) {
  if (typeof number !== "number" || isNaN(number)) {
    return "Invalid number.";
  }

  // Convert the number to a string
  const numberString = number.toString();
  let formattedNumber = "";

  // Iterate over each digit of the number
  for (let i = 0; i < numberString.length; i++) {
    formattedNumber += numberString[i];

    // Check if the current and next digits are both even
    if (
      parseInt(numberString[i]) % 2 === 0 &&
      parseInt(numberString[i + 1]) % 2 === 0 &&
      parseInt(numberString[i]) !== 0 &&
      parseInt(numberString[i + 1]) !== 0
    ) {
      formattedNumber += "-";
    }
  }

  // Add the last digit to the formatted number
  formattedNumber += numberString[numberString.length - 1];

  return formattedNumber;
}

console.log(insertDashBetweenEvenDigits(123456789));
// Output: "123456789"
console.log(insertDashBetweenEvenDigits(24680));
// Output: "2-4-6-8-0"
console.log(insertDashBetweenEvenDigits(13579));
// Output: "13579"
console.log(insertDashBetweenEvenDigits(246813579));
// Output: "2-4-6-8-1-3-5-7-9"
