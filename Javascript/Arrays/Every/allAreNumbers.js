function allAreNumbers(array) {
  return array.every((num) => typeof num === "number");
}

console.log(allAreNumbers([1, 2, 3, 4, 5]));
// Output: true
