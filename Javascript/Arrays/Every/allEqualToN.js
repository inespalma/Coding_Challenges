function allEqualToN(array, n) {
  return array.every((num) => num === n);
}

console.log(allEqualToN([1, 1, 1, 1, 1], 1));
// Output: true
