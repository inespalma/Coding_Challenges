function getMaxOdd(array) {
  return array.filter((num) => num % 2 !== 0).reduce((a, b) => Math.max(a, b));
}

console.log(getMaxOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Output: 9
