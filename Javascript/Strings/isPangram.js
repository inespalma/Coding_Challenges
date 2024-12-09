function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerCaseString = string.toLowerCase();

  return [...alphabet].every((char) => lowerCaseString.includes(char));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
// Output: true
console.log(isPangram("The quick brown fox jumps over the azy dog"));
// Output: false
