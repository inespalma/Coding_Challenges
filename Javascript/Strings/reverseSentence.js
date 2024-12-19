function reverseSentence(sentence) {
  const words = sentence.split(" ");
  const reversedWords = words.slice().reverse().join(" ");

  return reversedWords;
}

console.log(reverseSentence("Hello World"));
// Output: "World Hello"
console.log(reverseSentence("Buondi"));
// Output: "Buondi"
console.log(reverseSentence("This is a bigger example"));
// Output: "example bigger a is This"
