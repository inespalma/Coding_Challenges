function squareParallelepipedSurfaceArea(baseSide, length) {
  let surfaceArea = 2 * (baseSide ** 2 + 2 * baseSide * length);
  return surfaceArea;
}

console.log(squareParallelepipedSurfaceArea(5, 10));
