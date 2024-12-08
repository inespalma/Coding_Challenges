function joinReversedStrings(strings) {
  return strings.reverse().join(",");
}
console.log(joinReversedStrings(["apple", "banana", "cherry"]));
// Output: "cherry,banana,apple"
