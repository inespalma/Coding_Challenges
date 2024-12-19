function binarySearch(array, num) {
  const findPivot = (a, b) => Math.round((a + b) / 2);

  let min = 0;
  let max = array.length - 1;

  let pivot = findPivot(max, min);
  let count = 0;

  while (min <= max) {
    count++;

    if (array[pivot] === num) {
      return {
        foundAtIndex: pivot,
        numberOfGuesses: count,
      };
    } else if (array[pivot] > num) {
      max = pivot - 1;
      pivot = findPivot(max, min);
    } else {
      min = pivot + 1;
      pivot = findPivot(max, min);
    }
  }

  return {
    foundAtIndex: null,
    numberOfGuesses: count,
  };
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
