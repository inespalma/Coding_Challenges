function findEven(array) {
  return array.find((num) => num % 2 === 0);
}

console.log(findEven([1, 2, 3, 4, 5]));
// Output: 2
