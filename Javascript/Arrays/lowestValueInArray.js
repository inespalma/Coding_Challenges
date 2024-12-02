function lowestValueInArray(array) {
  let minValue = Math.min(...array);
  return minValue;
}

console.log(lowestValueInArray([1, 2, 3, 4, 5]));
