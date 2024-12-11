function allAreNegative(array) {
  return array.every((num) => num < 0);
}

console.log(allAreNegative([-1, -2, -3, -4, -5]));
// Output: true
