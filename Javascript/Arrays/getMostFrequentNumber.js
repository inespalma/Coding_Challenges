function getMostFrequentNumber(array) {
  const count = array.map((num) => array.filter((ele) => ele === num).length);

  const maxCount = Math.max(...count);

  return array[count.indexOf(maxCount)];
}

console.log(getMostFrequentNumber([4, 4, 1, 2, 3]));
// Output: 4
console.log(getMostFrequentNumber([1, 2, 2, 3, 3, 4, 4]));
// Output: 2 (the first number with the highest frequency)
