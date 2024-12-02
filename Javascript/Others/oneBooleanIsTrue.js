// Function to check if ONLY one of the booleans is true
function oneInArrayIsTrue(...booleans) {
  return booleans.filter(Boolean).length === 1;
}

console.log(oneInArrayIsTrue(false, false, false)); // false
console.log(oneInArrayIsTrue(true, true, true)); // false
console.log(oneInArrayIsTrue(true, false, true)); // false
console.log(oneInArrayIsTrue(false, false, true)); // true

console.log(oneInArrayIsTrue(false, true, false, false)); // true
console.log(oneInArrayIsTrue(true, false, false, false)); // true
console.log(oneInArrayIsTrue(true, true, false, false)); // false
console.log(oneInArrayIsTrue(true, false, false, false, true)); // false
