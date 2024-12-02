function countDivisionsUntilLessThanTwo(number) {
  if (number <= 0) {
    return "Please enter a positive number.";
  }

  let count;

  for (count = 0; number >= 2; number = Math.floor(number / 2)) {
    count++;
  }

  return count;
}

console.log(countDivisionsUntilLessThanTwo(10)); // Output: 3 (10 → 5 → 2 → 1)
console.log(countDivisionsUntilLessThanTwo(64)); // Output: 6 (64 → 32 → 16 → 8 → 4 → 2 → 1)
console.log(countDivisionsUntilLessThanTwo(1)); // Output: 0 (Number 1 is less than 2)
console.log(countDivisionsUntilLessThanTwo(-5)); // Output: "Please enter a positive number."
