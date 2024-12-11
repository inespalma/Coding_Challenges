function cubesOfArray(array) {
  if (array.length === 0) {
    return [];
  }

  return [array[0] ** 3, ...cubesOfArray(array.slice(1))];
}

console.log(cubesOfArray([1, 2, 3]));
// Output: [1, 8, 27]
