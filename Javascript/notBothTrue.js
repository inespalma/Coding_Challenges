// Returns true if NOT both true
function notBothTrue(a, b) {
  return !(a && b);
}

console.log(notBothTrue(true, true)); // false
console.log(notBothTrue(true, false)); // true
console.log(notBothTrue(false, true)); // true
console.log(notBothTrue(false, false)); // true