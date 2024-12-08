function getAllMostFrequentNumbers(array) {
  const count = array.map((num) => array.filter((ele) => ele === num).length);
  const maxCount = Math.max(...count);

  const modes = [];
  for (let i = 0; i < count.length; i++) {
    if (count[i] === maxCount && !modes.includes(array[i])) {
      modes.push(array[i]);
    }
  }

  return { modes: modes, frequency: maxCount };
}

console.log(getAllMostFrequentNumbers([4, 4, 1, 2, 3]));
// Output: { modes: [ 4 ], frequency: 2 }
console.log(getAllMostFrequentNumbers([1, 2, 2, 3, 3, 4, 4]));
// Output: { modes: [ 2, 3, 4 ], frequency: 2 }
