function getMinEven(array) {
  return array.filter((num) => num % 2 === 0).reduce((a, b) => Math.min(a, b));
}

console.log(getMinEven([1, 2, 3, 4]));
// Output: 2
