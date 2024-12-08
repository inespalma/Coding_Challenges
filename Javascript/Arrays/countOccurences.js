function countOccurrences(numbers) {
  return numbers.reduce((map, num) => {
    map.set(num, (map.get(num) || 0) + 1);
    return map;
  }, new Map());
}

console.log(countOccurrences([1, 2, 1, 3, 3, 3, 4]));
// Output: { 1 => 2, 2 => 1, 3 => 3, 4 => 1 }
