//<------Using Filter------>
function evenNumbersArray(array) {
  return array.filter((num) => num % 2 === 0);
}

console.log(evenNumbersArray([2, 3, 4, 5, 6]));
// Output: [2, 4, 6]

//<------Using Recursion------>
function evenNumbersFromArray(array) {
  if (array.length === 0) {
    return [];
  }

  if (array[0] % 2 === 0) {
    return [array[0], ...evenNumbersFromArray(array.slice(1))];
  } else {
    return evenNumbersFromArray(array.slice(1));
  }
}

console.log(evenNumbersFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Output: [2, 4, 6, 8, 10]
