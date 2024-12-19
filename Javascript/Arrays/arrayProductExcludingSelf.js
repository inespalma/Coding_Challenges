function exclusiveProduct(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        console.log(product);
        product *= array[j];
      }
    }
    result.push(product);
  }
  return result;
}

console.log(exclusiveProduct([1, 3, 5]));
// Output: [15, 5, 3]

// 1 -> 3 * 5
// 3 -> 1 * 5
// 5 -> 1 * 3

console.log(exclusiveProduct([3, 4, 5]));
// Output: [20, 15, 12]
