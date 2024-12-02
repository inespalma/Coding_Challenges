function arrayWithoutDuplicates(array) {
  let withoutDup = [...new Set(array)];
  return withoutDup;
}

console.log(arrayWithoutDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(arrayWithoutDuplicates([1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9, 10]));

// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
