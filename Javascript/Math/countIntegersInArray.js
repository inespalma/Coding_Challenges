//<------Using Recursion------>
function countIntegersInArray(array) {
  if (array.length === 0) {
    return 0;
  }

  if (Number.isInteger(array[0])) {
    return 1 + countIntegersInArray(array.slice(1));
  } else {
    return countIntegersInArray(array.slice(1));
  }
}

console.log(countIntegersInArray([1.1, 2.2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Output: 8
