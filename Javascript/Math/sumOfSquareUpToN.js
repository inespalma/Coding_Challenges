function sumOfSquaresUpToN(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i * i;
  }

  return total;
}

console.log(sumOfSquaresUpToN(30));
