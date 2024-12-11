function sumIntegersUpToN(n) {
  let sum = 0;
  let i = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}

console.log(sumIntegersUpToN(5));
// Output: 15

//<------Recursive Version------>
function sumArrayElements(array) {
  if (array.length === 0) return 0;

  return array[0] + sumArrayElements(array.slice(1));
}

console.log(sumArrayElements([1, 2, 3, 4, 5]));
