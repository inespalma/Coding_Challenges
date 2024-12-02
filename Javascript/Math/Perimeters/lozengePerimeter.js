function lozengePerimeter(majorDiagonal, minorDiagonal) {
  let sideLength = Math.sqrt(
    Math.pow(majorDiagonal / 2, 2) + Math.pow(minorDiagonal / 2, 2)
  );
  return 4 * sideLength;
}

console.log(lozengePerimeter(5, 3));
