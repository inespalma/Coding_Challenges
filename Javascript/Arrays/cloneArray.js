//<------Using Recursion------>
function cloneArray(array) {
  if (array.length === 0) {
    return [];
  }
  return [array[0], ...cloneArray(array.slice(1))];
}

console.log(cloneArray([1, 2, 3]));
// Output: [1, 2, 3]
