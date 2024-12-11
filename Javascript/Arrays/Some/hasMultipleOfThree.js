function hasMultipleOfThree(array) {
  return array.some((num) => num % 3 === 0);
}

console.log(hasMultipleOfThree([1, 2, 3, 4, 5]));
// Output: true
