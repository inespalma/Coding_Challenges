function createArrayFromZeroToN(n) {
  if (n <= 0 || typeof n !== "number") {
    return "Please enter a number greater than 0.";
  }

  if (n === 1) {
    return [0, 1];
  }

  return [...createArrayFromZeroToN(n - 1), n];
}

const validResult = createArrayFromZeroToN(5);
console.log(validResult);
// Output: [0, 1, 2, 3, 4]

const invalidResult = createArrayFromZeroToN(-2);
console.log(invalidResult);
// Output: "Please enter a number greater than 0."

const invalidResult2 = createArrayFromZeroToN("abc");
console.log(invalidResult2);
// Output: "Please enter a number greater than 0."

function createArrayFromNToZero(n) {
  if (n <= 0 || typeof n !== "number") {
    return "Please enter a number greater than 0.";
  }
  if (n === 1) {
    return [1, 0];
  }

  return [n, ...createArrayFromNToZero(n - 1)];
}

const result1 = createArrayFromNToZero(5);
console.log(result1);
// Output: [5, 4, 3, 2, 1, 0]

const result2 = createArrayFromNToZero(-2);
console.log(result2);
// Output: "Please enter a number greater than 0."

const result3 = createArrayFromNToZero("abc");
console.log(result3);
// Output: "Please enter a number greater than 0."
