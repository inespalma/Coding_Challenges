function countOccurrencesOfN(array, n) {
  return array.filter((num) => num === n).length;
}

console.log(countOccurrencesOfN([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
// Output: 1
console.log(countOccurrencesOfN([1, 2, 3, 4, 5, 5, 7, 8, 9, 10], 5));
// Output: 1
console.log(countOccurrencesOfN([1, 1, 1, 1, 1], 1));
// Output: 5
