function sortCandlesOnFirst(candles) {
  let sorted = candles.sort((a, b) => (b === true ? 1 : -1));

  return sorted;
}

console.log(sortCandlesOnFirst([true, false, false, true, true]));
// Output: [true, true, true, false, false]
