function sortDescending(array) {
  return array.sort((a, b) => b - a);
}

console.log(sortDescending([1, 2, 3, 4, 5]));
// Output: [5, 4, 3, 2, 1]
