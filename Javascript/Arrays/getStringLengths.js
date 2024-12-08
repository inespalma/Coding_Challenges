//This function takes an array of strings and returns an array of the lengths of those strings.

function getStringLengths(strings) {
  return strings.map((s) => s.length);
}
const strings = ["apple", "banana", "cherry"];
const comprimentoString = getStringLengths(strings);

console.log(comprimentoString);
// [5, 6, 6]
