function returnTrueIfAnyEven(numbers) {
  return numbers.some((ele) => ele % 2 === 0);
}

console.log(returnTrueIfAnyEven([1, 2, 3, 4, 5]));
// true
console.log(returnTrueIfAnyEven([1, 3, 5]));
// false
