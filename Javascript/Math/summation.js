function summationUpToN(n) {
  let sum = 0;
  let i = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}

console.log(summationUpToN(5));
// Output: 15
