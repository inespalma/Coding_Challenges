function filterOddNumbers(array) {
  return array.filter((num) => num % 2 !== 0);
}

console.log(filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Output: [1, 3, 5, 7, 9]
