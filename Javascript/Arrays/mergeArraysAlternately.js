function combineArrays(array1, array2) {
  const combinedArray = [];
  const maxLength = Math.max(array1.length, array2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < array1.length) {
      combinedArray.push(array1[i]);
    }
    if (i < array2.length) {
      combinedArray.push(array2[i]);
    }
  }

  return combinedArray;
}

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
// Output: [1, 4, 2, 5, 3, 6]
