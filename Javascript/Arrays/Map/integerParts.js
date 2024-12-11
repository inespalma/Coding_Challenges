function integerParts(array) {
  return array.map((num) => Math.floor(num));
}

console.log(integerParts([1.1, 2.4, 1.5]));
// Output: [1, 2, 1]
