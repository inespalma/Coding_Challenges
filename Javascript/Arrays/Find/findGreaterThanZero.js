function findGreaterThanZero(array) {
  return array.find((num) => num > 0);
}

console.log(findGreaterThanZero([1, 2, 3, 4, 5]));
// Output: 1
