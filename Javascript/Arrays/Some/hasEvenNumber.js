function hasEvenNumber(array) {
  return array.some((num) => num % 2 === 0);
}

console.log(hasEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Output: true
