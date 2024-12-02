function hexagonArea(side) {
  let squareRoot = Math.sqrt(3);
  let calc = ((3 * squareRoot) / 2) * Math.pow(side, 2);
  return Math.floor(calc);
}

console.log(hexagonArea(10));
