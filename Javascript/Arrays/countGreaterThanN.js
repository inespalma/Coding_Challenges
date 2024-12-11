//<------Using Recursion------>

function countGreaterThanN(array, n) {
  if (array.length === 0) return 0;

  if (array[0] > n) {
    return 1 + countGreaterThanN(array.slice(1), n);
  } else {
    return 0 + countGreaterThanN(array.slice(1), n);
  }
}

console.log(countGreaterThanN([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(countGreaterThanN([1, 2, 3, 4, 5], 4)); // Output: 1
