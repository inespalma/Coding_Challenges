function decimalParts(array) {
  return array.map((num) => {
    let decimalPart = num % 1;
    return Math.floor(decimalPart * 100) / 100;
  });
}

console.log(decimalParts([1.5, 2.4, 3.1, 4.2]));
// Output: [0.5, 0.39, 0.1, 0.2]
