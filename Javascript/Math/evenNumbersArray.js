function evenNumbersArray(array) {
  return array.filter((num) => num % 2 === 0);
}

console.log(evenNumbersArray([2, 3, 4, 5, 6]));
// Output: [2, 4, 6]
