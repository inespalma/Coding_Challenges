function hasGreaterThanZero(array) {
  return array.some((num) => num > 0);
}

console.log(hasGreaterThanZero([1, 2, 3, 4, 5]));
// Output: true
