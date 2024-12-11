function filterEvenNumbers(array) {
  return array.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5]));
// Output: [2, 4]
