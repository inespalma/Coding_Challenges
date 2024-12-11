function hasLessThanN(array, n) {
  return array.some((num) => num < n);
}

console.log(hasLessThanN([1, 2, 3, 4, 5], 3));
// Output: true
