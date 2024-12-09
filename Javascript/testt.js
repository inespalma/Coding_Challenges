function verificaPangrama(string) {
  const todas = "abcdefghijklmnopqrstuvwxyz";
  const minusculas = string.toLowerCase();

  return [...todas].every((ele) => minusculas.includes(ele));
}

console.log(verificaPangrama("The quick brown fox jumps over the lazy dog"));
// Output: true
console.log(verificaPangrama("The quick brown fox jumps over the azy dog"));
// Output: false