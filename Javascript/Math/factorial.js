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
