function filterLessThanN(array, n) {
  return array.filter((num) => num < n);
}

console.log(filterLessThanN([1, 2, 3, 4, 5], 3));
// Output: [1, 2]
