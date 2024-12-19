function isSubsequence(array, subarray) {
  let i = 0;
  let j = 0;

  while (i < array.length && j < subarray.length) {
    if (array[i] === subarray[j]) {
      j++;
    }
    i++;
  }

  return j === subarray.length;
}

console.log(isSubsequence([1, 2, 3, 4, 5], [1, 2, 3]));
// Output: true
console.log(isSubsequence([1, 2, 3, 4, 5], [1, 2, 3, 4, 6]));
// Output: false
