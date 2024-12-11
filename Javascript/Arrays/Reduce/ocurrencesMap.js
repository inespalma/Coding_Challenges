function occurrencesMap(array) {
  return array.reduce((map, item) => {
    map.set(item, (map.get(item) || 0) + 1);
    return map;
  }, new Map());
}

console.log(occurrencesMap([1, 2, 3, 1, 1, 6, 7]));
// Output: Map { 1 => 3, 2 => 1, 3 => 1, 6 => 1, 7 => 1 }
