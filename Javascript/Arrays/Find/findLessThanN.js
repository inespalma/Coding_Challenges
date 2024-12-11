function findLessThanN(array, n) {
  return array.find((num) => num < n);
}

console.log(findLessThanN([1, 2, 3, 4, 5], 3));
// Output: 1
