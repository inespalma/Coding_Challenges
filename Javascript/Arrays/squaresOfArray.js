function squaresOfArray(array) {
  if (array.length === 0) {
    return [];
  }
  return [array[0] ** 2, ...squaresOfArray(array.slice(1))];
}

console.log(squaresOfArray([1, 2, 3, 4, 5]));
// Output: [1, 4, 9, 16, 25]
