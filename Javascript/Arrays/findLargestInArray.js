function findLargestInArray(array) {
  let largestValue = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestValue) {
      largestValue = array[i];
    }
  }
  return largestValue;
}

console.log(findLargestInArray([4, 1, 8, 5]));
