function linguagemHacker(string) {
  string = string.replace(/a/g, "4").replace(/A/g, "4");
  string = string.replace(/e/g, "3").replace(/E/g, "3");
  string = string.replace(/i/g, "1").replace(/I/g, "1");
  string = string.replace(/o/g, "0").replace(/O/g, "0");
  string = string.replace(/s/g, "5").replace(/S/g, "5");

  return string;
}

console.log(linguagemHacker("hacker time"));
