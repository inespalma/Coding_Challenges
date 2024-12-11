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

//<------Recursive Version------>

// Function that calculates the factorial of a single number

function calculateFactorial(n) {
  if (n === 1) return 1;

  return n * calculateFactorial(n - 1);
}

console.log(calculateFactorial(170));

// Function that calculates the factorial of each element in an array
function calculateFactorialsOfArray(array) {
  if (array.length === 0) return [];
  function fatorial(n) {
    n = BigInt(n);
    if (n === 0n || n === 1n) return 1n;
    return n * fatorial(n - 1n);
  }
  return [fatorial(array[0])].concat(
    calculateFactorialsOfArray(array.slice(1))
  );
}

console.log(calculateFactorialsOfArray([1, 2, 3, 170]));
