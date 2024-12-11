function allContainLetter(array, letter) {
  return array.every((str) => str.includes(letter));
}

console.log(allContainLetter(["abc", "def", "ghi"], "a"));
// Output: false

console.log(allContainLetter(["abc", "abd", "aef"], "a"));
// Output: true
