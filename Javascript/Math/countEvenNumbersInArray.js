//<------Using Recursion------>
function countEvenNumbersInArray(array) {
  if (array.length === 0) {
    return 0;
  }

  if (array[0] % 2 === 0) {
    return 1 + countEvenNumbersInArray(array.slice(1));
  } else {
    return countEvenNumbersInArray(array.slice(1));
  }
}

console.log(countEvenNumbersInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Output: 5
