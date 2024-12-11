function filterGreaterThanN(array, n) {
  return array.filter((num) => num > n);
}

console.log(filterGreaterThanN([1, 2, 3, 4, 5], 3));
// Output: [4, 5]
