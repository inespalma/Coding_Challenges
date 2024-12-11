function hasNegative(array) {
  return array.some((num) => num < 0);
}

console.log(hasNegative([1, 2, 3, -4, 5]));
// Output: true
