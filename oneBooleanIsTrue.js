//Returns true if ONLY one of them is true (2 arguments)
function oneBooleanIsTrue(boolean1, boolean2) {
  return (boolean1 && !boolean2) || (!boolean1 && boolean2);
}

console.log(oneBooleanIsTrue(false, false)); //false
console.log(oneBooleanIsTrue(true, true)); //false
console.log(oneBooleanIsTrue(false, true)); //true
console.log(oneBooleanIsTrue(true, false)); //true


//Returns true if ONLY one of them is true (3 arguments)
function oneIsTrue(a, b, c) {
  return a + b + c === 1;
}

console.log(oneIsTrue(false, false, false)); //false
console.log(oneIsTrue(true, true, true)); //false
console.log(oneIsTrue(true, false, true)); //false
console.log(oneIsTrue(false, false, true)); //true


// Returns true if only one element in the array is true ( works with more then 3 arguments)
function oneInArrayIsTrue(arr) {
  return arr.filter(Boolean).length === 1; // Filters out falsy values and checks if exactly one is true
}

console.log(oneInArrayIsTrue([false, false, false])); // false
console.log(oneInArrayIsTrue([true, true, true])); // false
console.log(oneInArrayIsTrue([true, false, true])); // false
console.log(oneInArrayIsTrue([false, false, true])); // true
