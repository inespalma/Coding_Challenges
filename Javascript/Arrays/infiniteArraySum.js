function infiniteArray(array, left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    if (!array || array.length === 0) return 0;
    sum += array[i % array.length];
  }
  return sum;
}

console.log(infiniteArray([1, 2, 3, 4], 3, 7));
// Output: 14 -> 4 + 1 + 2 + 3 + 4
