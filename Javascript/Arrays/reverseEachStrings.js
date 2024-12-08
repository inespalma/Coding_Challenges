function reverseEachString(strings) {
  return strings.map((ele) => ele.split("").reverse().join(""));
}
console.log(reverseEachString(["apple", "banana", "cherry"]));
//[ 'elppa', 'ananab', 'yrrehc' ]
