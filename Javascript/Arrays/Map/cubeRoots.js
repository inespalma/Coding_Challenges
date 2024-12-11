function cubeRoots(array) {
  return array.map((num) => Math.cbrt(num));
}

console.log(cubeRoots([1, 2, 3]));
// Output: [1, 1.2599210498948734, 1.4422495703074083]
