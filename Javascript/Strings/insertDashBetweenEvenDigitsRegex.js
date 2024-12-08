function addHyphenBetweenEvens(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Invalid number.";
  }

  // Converts the number to a string and uses a regular expression to add hyphens
  return num.toString().replace(/([02468])(?=[02468])/g, "$1-");
}

console.log(addHyphenBetweenEvens(2468));
// Output: "2-4-6-8"
console.log(addHyphenBetweenEvens(1234));
// Output: "1234"
console.log(addHyphenBetweenEvens("text"));
// Output: "Invalid number."
