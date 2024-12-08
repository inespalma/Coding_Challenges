function returnTrueIfAllEven(numbers) {
  return numbers.every((ele) => ele % 2 === 0);
}

console.log(returnTrueIfAllEven([1, 2, 3, 4, 5]));
// Output: false
console.log(returnTrueIfAllEven([2, 4, 6, 8, 10]));
// Output: true
