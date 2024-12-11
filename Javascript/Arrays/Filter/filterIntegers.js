function filterIntegers(array) {
  return array.filter((num) => Number.isInteger(num));
}

console.log(filterIntegers([1, 2, 3, 4.2, 5]));
// Output: [1, 2, 3, 5]
