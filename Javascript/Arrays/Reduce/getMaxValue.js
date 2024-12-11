function getMaxValue(array) {
  return array.reduce((a, b) => Math.max(a, b));
}

console.log(getMaxValue([1, 2, 3, 4, 5]));
// Output: 5
