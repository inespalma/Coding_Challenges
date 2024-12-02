function highestAbsoluteInArray(arr) {
  return Math.max(...arr.map(Math.abs));
}

console.log(highestAbsoluteInArray([-5, -30, -8, 7])); // Output: 8
