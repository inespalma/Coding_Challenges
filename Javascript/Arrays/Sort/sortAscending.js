function sortAscending(array) {
  return array.sort((a, b) => a - b);
}

console.log(sortAscending([5, 4, 3, 2, 1]));
// Output: [1, 2, 3, 4, 5]
