function countEvensBetweenTwoValues(value1, value2) {
  if (value1 === value2) {
    return "Please enter two different values.";
  }

  let evens = 0;
  let lower = Math.min(value1, value2);
  let upper = Math.max(value1, value2);

  for (let i = lower; i <= upper; i++) {
    if (i % 2 === 0) {
      evens++;
    }
  }
  return evens;
}

console.log(countEvensBetweenTwoValues(1, 10)); // Output: 5
console.log(countEvensBetweenTwoValues(2, 8)); // Output: 4
console.log(countEvensBetweenTwoValues(10, 5)); // Output: 3
console.log(countEvensBetweenTwoValues(-5, 5)); // Output: 5
console.log(countEvensBetweenTwoValues(5, 5)); // Output: Please enter two different values.
