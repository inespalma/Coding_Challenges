function highestValueInArray(array) {
  let maxValue = Math.max(...array);
  return maxValue;
}

console.log(highestValueInArray([1, 2, 3, 4, 5]));
