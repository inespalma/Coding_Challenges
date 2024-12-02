function factorialN(n) {
  let i = 1n;
  let result = 1n;

  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
}

console.log(factorialN(170));

//Recursive Version
function factorialAlternative(n) {
  if (n === 1) return 1;

  return n * factorialAlternative(n - 1);
}

console.log(factorialAlternative(170));
