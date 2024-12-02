//Returns true if ONLY one of them is true (2 arguments)
function oneBooleanIsTrue(boolean1, boolean2) {
  return (boolean1 && !boolean2) || (!boolean1 && boolean2);
}

console.log(oneBooleanIsTrue(false, false)); //false
console.log(oneBooleanIsTrue(true, true)); //false
console.log(oneBooleanIsTrue(false, true)); //true
console.log(oneBooleanIsTrue(true, false)); //true
