function sumOfSquaresOfArray(array) {
  if (array.length === 0) {
    return 0;
  }
  return array[0] ** 2 + sumOfSquaresOfArray(array.slice(1));
}

console.log(sumOfSquaresOfArray([1, 2, 3, 4, 5]));
// Output: 55
