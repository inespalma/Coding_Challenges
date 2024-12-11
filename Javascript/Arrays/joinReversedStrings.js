function joinReversedStrings(strings) {
  return strings.reverse().join(",");
}
console.log(joinReversedStrings(["apple", "banana", "cherry"]));
// Output: "cherry,banana,apple"

//<------Using Recursion------>
function reverseArray(array) {
  if (array.length <= 1) {
    return array;
  }

  return [...reverseArray(array.slice(1)), array[0]];
}

console.log(reverseArray([1, 2, 3, 4, 5]));
// Output: [5, 4, 3, 2, 1]
