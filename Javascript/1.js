// function oneOrOthersFinal(a, b, c) {
//     if (a === b && b === c) {
//     return false;
//   }
//   return true;
// }

// console.log(oneOrOthersFinal(true, true, true)); //false
// console.log(oneOrOthersFinal(false, false, false)); //false
// console.log(oneOrOthersFinal(false, true, false)); //true
// console.log(oneOrOthersFinal(true, false, true)); //true

function contrarioDoE(a, b) {
  // Retorna verdadeiro se NÃO forem ambos verdadeiros
  return !(a && b); 
}

console.log(contrarioDoE(true, true)); // false (ambos são verdadeiros)
console.log(contrarioDoE(true, false)); // true (não são ambos verdadeiros)
console.log(contrarioDoE(false, true)); // true (não são ambos verdadeiros)
console.log(contrarioDoE(false, false)); // true (não são ambos verdadeiros)
